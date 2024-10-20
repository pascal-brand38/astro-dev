// Copyright (c) Pascal Brand
// MIT License

import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const defaultConfig = {
  srcDir: 'assets/astro-sprite',
  inputExtension: ['.png', /* '.webp' */],

  output: {
    sprites: ['img/astro-sprite.png', 'img/astro-sprite.webp'],
    css: {
      output: 'css/astro-sprite.css',
      cssPrefix: '.astro-sprite-',
      cssSelector: '::before',
    }
  }
}
let spriteConfig

// read all icons data
async function getIcons(config) {
  let icons = []
  await Promise.all(fs.readdirSync(config.srcDir).map(async (file) => {
    const fullName = path.join(config.srcDir, file);
    if (fs.statSync(fullName).isFile()) {
      // it is a file. Checks it ends with inputExtension
      if (config.inputExtension.some(ext => file.endsWith(ext))) {
        const image = sharp(fullName);
        const metadata = await image.metadata()
        icons.push( { name: path.parse(file).name, fullName, width: metadata.width, height: metadata.height, } )
      }
    }
  }))
  return icons
}

// get the positions of all icons in the sprite
function getPositions(icons) {
  let positions = []
  let left = 0
  icons.forEach(icon => {
    // input, left and top are used by further call to sharp.composite()
    // do not change these property name
    positions.push({ input: icon.fullName, name: icon.name, left: left, top: 0, height: icon.height, width: icon.width })
    left += icon.width
  })
  return positions
}

function createDirOfFile(fullName) {
  const dirname = path.dirname(fullName)
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// write the resulting css
function writeCss(positions, config) {
  let cssText = '/* Auto-generated by astro-sprite */\n'
  positions.forEach(position => {
    cssText += `${config.output.css.cssPrefix}${position.name}${config.output.css.cssSelector} { background-position: -${position.left}px -${position.top}px; width: ${position.width}px; height: ${position.height}px; }\n`
  })

  createDirOfFile(config.output.css.output)
  fs.writeFileSync(config.output.css.output, cssText)
}

function writeSprite(positions, config) {
  const sprite = sharp({
    create: {
      background: { alpha: 0, b: 0, g: 0, r: 0 },
      channels: 4,
      height: Math.max(...positions.map(position => position.top + position.height)),
      width: Math.max(...positions.map(position => position.left + position.width)),
    },
  });

  sprite.composite(positions);
  config.output.sprites.forEach(output => {
    createDirOfFile(output)
    sprite.toFile(output)
  })
}

async function runAstroSprite(config) {
  const icons = await getIcons(config)
  const positions = getPositions(icons)
  writeCss(positions, config)
  writeSprite(positions, config)
}

const AstroConfig = {
  name: 'astro-sprite',
  hooks: {
    "astro:config:done": function ({ config: astroConfig }) {
      spriteConfig.srcDir = path.join(fileURLToPath(astroConfig.srcDir), spriteConfig.srcDir)
      spriteConfig.output.sprites.forEach((sprite, index) => spriteConfig.output.sprites[index]=path.join(fileURLToPath(astroConfig.publicDir), sprite))
      spriteConfig.output.css.output = path.join(fileURLToPath(astroConfig.srcDir), spriteConfig.output.css.output)
      runAstroSprite(spriteConfig)
    },
  },
}

// initialize the astro sprite integration
function astroSprite(config = {}) {
  spriteConfig = { ...defaultConfig, ...config}
  return AstroConfig
}

export default astroSprite
