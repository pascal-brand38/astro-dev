import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const config = {
  srcDir: 'data',
  inputExtension: ['.png', '.webp'],
  outputSprites: ['tmp/out.png', 'tmp/out.webp'],
}

let srcFiles = []
await Promise.all(fs.readdirSync(config.srcDir).map(async (file) => {
  const fullName = path.join(config.srcDir, file);
  if (fs.statSync(fullName).isFile()) {
    // it is a file. Checks it ends with inputExtension
    if (config.inputExtension.some(ext => file.endsWith(ext))) {
      const image = sharp(fullName);
      const metadata = await image.metadata()
      srcFiles.push( { fullName, width: metadata.width, height: metadata.height, } )
    }
  }
}))

let positions = []
let left = 0
let height = 0
srcFiles.forEach(src => {
  positions.push({ input: src.fullName, left: left, top: 0 })
  left += src.width
  if (height < src.height) {
    height = src.height
  }
})

const sprite = sharp({
  create: {
    background: { alpha: 0, b: 0, g: 0, r: 0 },
    channels: 4,
    height: height,
    width: left,
  },
});

sprite.composite(positions);
config.outputSprites.forEach(output =>
  sprite.toFile(output)
)


console.log(srcFiles)
console.log('DONE')
