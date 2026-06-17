let fs = require('fs');

let [A, B] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

console.log(A + B);