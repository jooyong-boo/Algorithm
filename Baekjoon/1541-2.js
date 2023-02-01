const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("-")
    .map((item) => {
        let value = item.split("+");
        return value.reduce((a, b) => Number(a) + Number(b));
    });

console.log(input.reduce((a, b) => a - b));
