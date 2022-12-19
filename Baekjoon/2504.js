const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];

if (input.length % 2 !== 0) {
    console.log(0);
    return;
}

for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "[") {
        stack.push(input[i]);
    } else if (input[i] === ")") {
        if (stack[stack.length - 1] === "(") {
            stack.pop();
            stack.push(2);
        } else {
            let count = 0;
            while (true) {
                let last = stack.pop();
                if (last === "[" || undefined) {
                    console.log(0);
                    return;
                }
                if (typeof last === "number") {
                    count += last;
                } else {
                    count *= 2;
                    break;
                }
            }
            stack.push(count);
        }
    } else if (input[i] === "]") {
        if (stack[stack.length - 1] === "[") {
            stack.pop();
            stack.push(3);
        } else {
            let count = 0;
            while (true) {
                let last = stack.pop();
                if (last === "(" || undefined) {
                    console.log(0);
                    return;
                }
                if (typeof last === "number") {
                    count += last;
                } else {
                    count *= 3;
                    break;
                }
            }
            stack.push(count);
        }
    } else {
        console.log(0);
        return;
    }
}

console.log(stack.reduce((a, b) => a + b));
