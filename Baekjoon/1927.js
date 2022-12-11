const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const N = input.shift();

let result = [];
let queue = [];

for (let i = 0; i < N; i++) {
    if (input[i] === 0) {
        if (queue.length === 0) {
            result.push("0");
        } else {
            result.push(`${queue[queue.length - 1]}`);
            queue = queue.slice(0, queue.length - 1);
        }
    } else {
        queue.push(input[i]);
        queue.sort((a, b) => b - a);
    }
}
console.log(result.join("\n"));
