const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const cities = input[0];
let distance = input[1].split(" ").map((item) => BigInt(item));
let value = input[2].split(" ").map((item) => BigInt(item));

let result = 0n;
let current = value[0];
for (let i = 0; i < cities; i++) {
    let next = value[i + 1];
    if (next && next < current) {
        result += current * distance[i];
        current = next;
        continue;
    }
    if (next && next >= current) {
        result += current * distance[i];
    }
}

console.log(String(result));
