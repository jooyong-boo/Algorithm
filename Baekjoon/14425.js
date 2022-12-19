const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const stringN = input.slice(1, N + 1);
const stringM = input.slice(N + 1, input.length);
const map = new Map();
let count = 0;

for (let i = 0; i < stringN.length; i++) {
    map.set(stringN[i], i);
}

for (let i = 0; i < stringM.length; i++) {
    if (map.has(stringM[i])) count++;
}

console.log(count);
