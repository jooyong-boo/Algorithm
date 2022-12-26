const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const N = input[0];
const value = input.slice(1).sort();

let plus = [];
let minus = [];
let zero = [];
let result = 0;

for (let i = 0; i < value.length; i++) {
    let current = value[i];
    if (current > 0) {
        plus.push(current);
    }
    if (current === 0) {
        zero.push(current);
    }
    if (current < 0) {
        minus.push(current);
    }
}

minus = minus.sort((a, b) => a - b);
while (minus.length > 1) {
    let one = minus.pop();
    let two = minus.pop();
    let sum = one * two;
    plus.push(sum);
}

plus = plus.sort((a, b) => b - a);

while (minus.length === 1 && plus.length) {
    if (zero.length) {
        minus.pop();
        zero.pop();
        break;
    }
    let minusValue = minus[0];
    let plusValue = plus.pop();
    let sum = minusValue + plusValue;
    if (sum < 0) {
        minus[0] = sum;
    }
    if (sum > 0) {
        minus.pop();
        plus.push(sum);
    }
    if (sum === 0) {
        minus.pop();
    }
}

if (minus.length) {
    return console.log(minus[0]);
}

plus = plus.sort((a, b) => a - b);
while (plus.length > 1) {
    let one = plus.pop();
    let two = plus.pop();
    let sum = 0;
    if (one + two > 2) {
        sum = one * two;
    } else {
        sum = one + two;
    }

    result += sum;
}

if (plus.length) {
    result += plus.pop();
}
console.log(result);
