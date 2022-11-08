const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

const N = input.shift()[0];
let cardNum = input.shift().sort((a, b) => a - b);
const M = input.shift()[0];
const getCardNum = input.shift();

let result = new Map();
for (let i = 0; i < N; i++) {
    if (result.get(cardNum[i])) {
        result.set(cardNum[i], result.get(cardNum[i]) + 1);
    } else {
        result.set(cardNum[i], 1);
    }
}

let answer = "";
for (let card of getCardNum) {
    if (result.get(card)) {
        answer += `${result.get(card)} `;
    } else {
        answer += "0 ";
    }
}

console.log(answer.trim());
