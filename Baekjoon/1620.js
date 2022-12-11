const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map((item) => +item);
const data = input.slice(1, M + 1);
const question = input.slice(-N);

let map = new Map(data.map((poke, index) => [poke, index + 1]));
let result = [];

for (let i = 0; i < N; i++) {
    if (!isNaN(question[i])) {
        result.push(data[+question[i] - 1]);
    } else {
        result.push(map.get(question[i]));
    }
}

console.log(result.join("\n"));
