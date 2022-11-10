const path = require('path');

console.log(path.sep);

const filerpath = path.join('/content', 'subfolder', 'text.txt');
console.log(filerpath)

const base = path.basename(filerpath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);