const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((value) => +value);

const N = input.shift();
let result = 0;
let stack = [];
for (let i = 0; i < N; i++) {
    let value = input[i];
    while (stack.length && stack.at(-1) <= value) {
        stack.pop();
    }
    result += stack.length;
    stack.push(value);
}
console.log(result);
