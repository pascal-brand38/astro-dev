import fs from 'fs'
import path from 'path'
import {joinImages} from 'join-images'

const config = {
  srcDir: 'data',
  inputExtension: [ '.png' ],
  outputSprites: [ 'tmp/out.png', 'tmp/out.webp' ],

}

let srcFiles = []
fs.readdirSync(config.srcDir).forEach(file => {
  const fullName = path.join(config.srcDir, file);
  if (fs.statSync(fullName).isFile()) {
    // it is a file. Checks it ends with inputExtension
    if (config.inputExtension.some(ext => file.endsWith(ext))) {
      srcFiles.push(fullName)
    }
  }
});


joinImages(srcFiles).then((img) => {
  // Save image as file
  config.outputSprites.forEach(output =>
    img.toFile(output)
  )
});
