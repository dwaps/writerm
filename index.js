#!/usr/bin/env node

let FILE_CONTENT_PATH;

const { existsSync, readFileSync } = require('fs');
const { path: appRoot } = require('app-root-path');

const { WritermError } = require('./utils');
const argFile = process.argv[2];

if (argFile) {
  if (!existsSync(argFile)) 
    throw new WritermError('File not exists !');
  FILE_CONTENT_PATH = argFile;
}
else {
  FILE_CONTENT_PATH = __dirname.endsWith('node_modules/writerm')
      ? appRoot.path
      : __dirname;
  FILE_CONTENT_PATH += '/content.txt';
}
    
const exists = existsSync(FILE_CONTENT_PATH);
if (!exists) {
  throw new WritermError('File not exists !');
}
else {
  writeOutput();
}

// FUNCTIONS
function writeOutput() {
  try {
    const fileContent = String(readFileSync(FILE_CONTENT_PATH));
    
    let speed = process.env.SPEED || +fileContent.split('\n\n')[0] || 50;
    
    const content = fileContent.replace(/\d+\n\n/, '');
    let count = 0;
    
    const id = setInterval(() => {
      if (count < content.length) {
        process.stdout.write(content[count++]);
      }
      else {
        clearInterval(id);
        console.log();
      }
    }, speed);
  }
  catch(e) {
    console.log(e);
  }
}
