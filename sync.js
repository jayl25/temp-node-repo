
const {readFileSync, writeFileSync} = require('fs');


//read file operation
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// node will create file if it does not exist else it will overwrite contents of whole file.
// flag: 'a' is used to append to file without overriding
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});


