const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = Number(input[0]);
let setA = input[1].split(" ").map((value) => +value);

let stack = [];
for (let i = 0; i < A; i++) {
    let value = setA[i];
    while (stack.length && setA[stack.at(-1)] < value) {
        setA[stack.pop()] = value;
    }
    stack.push(i);
}
if (stack.length) {
    for (let i = 0; i < stack.length; i++) {
        setA[stack[i]] = -1;
    }
}

console.log(setA.join(' '));
