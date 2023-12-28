

const path = require('path');

// __dirname = absolute path to script's location.
console.log(__dirname);

// gets relative path of target file
const filePath = path.join('content', 'subfolder', 'text.txt');
console.log(filePath);

// gets name of file
const base = path.basename(filePath);
console.log(base);

// gets absolute path of target file
const absolute = path.resolve(__dirname, 'content', 'subfolder/', 'test.txt');
console.log(absolute);