let fs = require('fs');

let [x1, y1, x2, y2] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distance.toFixed(4));