const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let stack1 = [];
let stack2 = [];

let reverse = true;
let open = false;

for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (current === "<") {
        open = true;
        reverse = false;
        if (stack2.length) {
            while (stack2.length) {
                stack1.push(stack2.pop());
            }
        }
        stack1.push(current);
        continue;
    }
    if (current === ">") {
        open = false;
        reverse = true;
        stack1.push(current);
        continue;
    }

    if (reverse) {
        if (!open && current === " ") {
            while (stack2.length) {
                stack1.push(stack2.pop());
            }
            stack1.push(current);
        } else {
            stack2.push(current);
        }
    } else {
        stack1.push(current);
    }
}

if (stack2.length) {
    while (stack2.length) {
        stack1.push(stack2.pop());
    }
}

console.log(stack1.reduce((a, b) => a + b));
