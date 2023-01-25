const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const numArr = input
    .shift()
    .split(" ")
    .map((value) => +value)
    .sort((a, b) => a - b);
const x = Number(input.shift());
let result = 0;

let i = 0;
let j = n - 1;

while (i !== j) {
    if (numArr[i] + numArr[j] === x) {
        result += 1;
        i++;
    } else if (numArr[i] + numArr[j] > x) {
        j--;
    } else {
        i++;
    }
}

console.log(result);
