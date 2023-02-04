const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const line = input
    .map((item) => item.split(" ").map((value) => +value))
    .sort((a, b) => a[0] - b[0]);

let result = [line[0]];
let count = 0;
for (let i = 1; i < N; i++) {
    let [x, y] = line[i];
    if (x <= result[0][1] && y > result[0][1]) {
        result[0][1] = y;
    }
    if (x > result[0][1]) {
        count += result[0][1] - result[0][0];
        result[0] = [x, y];
    }
}
count += result[0][1] - result[0][0];

console.log(count);
