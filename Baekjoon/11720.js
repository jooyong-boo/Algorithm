const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const N = input[0];

const result = input[1].split("");
let sum = 0;

for(i = 0; i < N; i++){
    sum += Number(result[i]);
}

console.log(sum);