const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const Arr = input
    .shift()
    .split(" ")
    .map((value) => +value)
    .sort((a, b) => a - b);
const v = Number(input.shift());
let result = 0;

let start = Arr.findIndex((item) => item === v);
for (let i = start; i < N; i++) {
    if (Arr[i] > v) break;
    if (Arr[i] === v) result++;
}

console.log(result);
