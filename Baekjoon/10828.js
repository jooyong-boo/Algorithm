const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let newInput = input.map((item) => item.split(" "));
let commandNum = newInput.shift();
let stack = [];
let result = [];

for (let i = 0; i < +commandNum[0]; i++) {
    if (newInput[i][0] === "push") {
        stack.push(newInput[i][1]);
    }
    if (newInput[i][0] === "pop") {
        if (stack[stack.length - 1]) {
            result.push(stack.pop());
        } else {
            result.push(-1);
        }
    }
    if (newInput[i][0] === "size") {
        result.push(stack.length);
    }
    if (newInput[i][0] === "empty") {
        if (stack.length === 0) {
            result.push(1);
        } else {
            result.push(0);
        }
    }
    if (newInput[i][0] === "top") {
        if (stack[stack.length - 1]) {
            result.push(stack[stack.length - 1]);
        } else {
            result.push(-1);
        }
    }
}

console.log(result.join("\n"));
