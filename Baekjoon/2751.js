const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const value = input
    .slice(1)
    .map((item) => +item)
    .sort((a, b) => a - b);

console.log(value.join("\n"));
