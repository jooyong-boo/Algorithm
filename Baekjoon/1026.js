const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let value = input.slice(1).map((item) => item.split(" ").map((item) => +item));

let A = value[0];
let B = value[1];
let result = 0;

while (A.length) {
    let min = Math.min(...A);
    let indexA = A.indexOf(min);
    let max = Math.max(...B);
    let indexB = B.indexOf(max);

    result += min * max;

    A.splice(indexA, 1);
    B.splice(indexB, 1);
}

console.log(result);
