const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((value) => {
        if (value.length > 1) {
            return value.split(" ").map((value) => +value);
        } else {
            return Number(value);
        }
    });

const T = input[0];
let result = [];

for (let i = 0; i < T; i++) {
    let value = 0;
    let dayStock = input.pop();
    let days = input.pop();
    let max = dayStock[dayStock.length - 1];
    for (let j = days - 1; j >= 0; j--) {
        let current = dayStock[j];
        if (max < current) {
            max = current;
        } else {
            value += max - current;
        }
    }
    result.push(value);
}

console.log(result.reverse().join("\n"));
