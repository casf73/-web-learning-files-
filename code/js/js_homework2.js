let fs = require('fs');

let [A, B, C, D] = fs.readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .map(Number);

console.log("DIFERENCA = " + (A * B - C * D));