// Copyright (c) Pascal Brand
// MIT License
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
const defaultConfig = {
    src: {
        dir: 'assets/astro-sprite',
        dirDev: '',
        extensions: ['.png', 'webp'],
    },
    dst: {
        spriteFile: 'img/astro-sprite.webp',
        spriteFileDev: '',
        cssMainClass: '.astro-sprite',
        cssFile: 'css/astro-sprite.css',
        cssFileDev: '',
        cssPrefix: '.astro-sprite-',
        cssSelector: '',
    }
};
let spriteConfig;
// read all icons data
async function getIcons(config) {
    let icons = [];
    await Promise.all(fs.readdirSync(config.src.dirDev).map(async (file) => {
        const fullName = path.join(config.src.dirDev, file);
        if (fs.statSync(fullName).isFile()) {
            // it is a file. Checks it ends with inputExtension
            if (config.src.extensions.some(ext => file.endsWith(ext))) {
                const image = sharp(fullName);
                const metadata = await image.metadata();
                icons.push({
                    name: path.parse(file).name,
                    fullName,
                    width: metadata.width ? metadata.width : 0,
                    height: metadata.height ? metadata.height : 0,
                });
            }
        }
    }));
    return icons;
}
// get the positions of all icons in the sprite
function getPositions(icons) {
    let positions = [];
    let left = 0;
    icons.forEach(icon => {
        // input, left and top are used by further call to sharp.composite()
        // do not change these property name
        positions.push({ input: icon.fullName, name: icon.name, left: left, top: 0, height: icon.height, width: icon.width });
        left += icon.width;
    });
    return positions;
}
function createDirOfFile(fullName) {
    const dirname = path.dirname(fullName);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}
// write the resulting css
function writeCss(positions, config) {
    let cssText = `/* Auto-generated by astro-sprite */\n`;
    cssText += `${config.dst.cssMainClass} { background-image:url(/${config.dst.spriteFile});}\n`;
    positions.forEach(position => {
        cssText += `${config.dst.cssPrefix}${position.name}${config.dst.cssSelector} { background-position: -${position.left}px -${position.top}px; width: ${position.width}px; height: ${position.height}px; }\n`;
    });
    createDirOfFile(config.dst.cssFileDev);
    fs.writeFileSync(config.dst.cssFileDev, cssText);
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
    createDirOfFile(config.dst.spriteFileDev);
    sprite.toFile(config.dst.spriteFileDev);
}
async function runAstroSprite(config) {
    const icons = await getIcons(config);
    const positions = getPositions(icons);
    writeSprite(positions, config);
    writeCss(positions, config); // must write css after the sprite to know the sprite sha1
}
const AstroConfig = {
    name: 'astro-sprite',
    hooks: {
        "astro:config:done": function ({ config: astroConfig }) {
            spriteConfig.src.dirDev = path.join(fileURLToPath(astroConfig.srcDir), spriteConfig.src.dir);
            spriteConfig.dst.spriteFileDev = path.join(fileURLToPath(astroConfig.publicDir), spriteConfig.dst.spriteFile);
            spriteConfig.dst.cssFileDev = path.join(fileURLToPath(astroConfig.srcDir), spriteConfig.dst.cssFile);
            runAstroSprite(spriteConfig);
        },
    },
};
// initialize the astro sprite integration
function astroSprite(config = {}) {
    spriteConfig = { ...defaultConfig, ...config };
    return AstroConfig;
}
export default astroSprite;
