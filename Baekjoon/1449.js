const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

const [N, L] = input[0];
const location = input[1].sort((a, b) => a - b);

let result = 0;
let count = 1;

let current = 0;
if (L === 1) {
    return console.log(N * L);
}
for (let i = 0; i < N; i++) {
    current = location[i];
    if (location[i + 1] === current + 1) {
        count += 1;
    } else {
        result += 1;
        count = 1;
    }
    if (count === L) {
        result += 1;
        count = 1;
        i++;
    }
}

console.log(result);
