const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("-")
    .map((item) => {
        let newItem = item.split("+");
        return newItem.reduce((a, b) => Number(a) + Number(b), 0);
    });

console.log(input.reduce((a, b) => a - b));
