const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let zero = [];
let one = [];
let sum = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "0") {
        sum += input[i];
        if (input[i + 1] === "1" || input[i + 1] === undefined) {
            zero.push(sum);
            sum = "";
        }
    }
    if (input[i] === "1") {
        sum += input[i];
        if (input[i + 1] === "0" || input[i + 1] === undefined) {
            one.push(sum);
            sum = "";
        }
    }
}

console.log(Math.min(zero.length, one.length));
