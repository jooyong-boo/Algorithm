const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const P = input
    .shift()
    .split(" ")
    .map((value, i) => +value)
    .sort((a, b) => a - b);

let result = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
    sum += P[i];
    result += sum;
}

console.log(result);
