const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const [N, ...value] = input;

let result = [];
let queue = [];

for (let i = 0; i <= N; i++) {
    if (value[i] === 0) {
        if (queue.length === 0) {
            result.push(0);
        } else {
            let index = queue.indexOf(Math.min(...queue));
            result.push(...queue.splice(index, 1));
        }
    } else {
        queue.push(value[i]);
    }
}

console.log(result.join("\n"));
