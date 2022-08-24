const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const result = input.map(x => x % 42);

const other = new Set(result);
const answer = [...other];

console.log(answer.length); 