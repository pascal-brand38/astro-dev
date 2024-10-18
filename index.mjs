import fs from 'fs'
import path from 'path'
import { joinImages } from 'join-images'
import sharp from 'sharp'

const config = {
  srcDir: 'data',
  inputExtension: ['.png'],
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
srcFiles.forEach(src => {
  positions.push({ src: src.fullName, offsetX: 0, offsetY: 0 })
})

joinImages(positions).then((img) => {
  // Save image as file
  config.outputSprites.forEach(output =>
    img.toFile(output)
  )
});

console.log(srcFiles)
console.log('DONE')
