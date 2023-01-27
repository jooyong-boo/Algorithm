const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input
    .shift()
    .split(" ")
    .map((value) => +value);
const coin = input.map((value) => +value);
let result = 0;

for (let i = N - 1; i >= 0; i--) {
    if (K < coin[i]) continue;
    if (K === 0) break;
    let answer = Math.floor(K / coin[i]);
    K = K % coin[i];
    result += answer;
}

console.log(result);
