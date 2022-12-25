const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .sort((a, b) => b - a)
    .reduce((a, b) => a + b);

if (input[input.length - 1] !== "0") {
    console.log(-1);
} else {
    let sum = input.split("").reduce((a, b) => Number(a) + Number(b));
    if (sum % 3 === 0) {
        console.log(input);
    } else {
        console.log(-1);
    }
}
