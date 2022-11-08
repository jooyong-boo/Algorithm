const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const command = [...input];

const deque = [];

const result = [];

for (let i = 0; i < N; i++) {
    if (command[i].includes("push")) {
        if (command[i].includes("front")) {
            deque.unshift(+command[i].slice(11, command[i].length));
        }
        if (command[i].includes("back")) {
            deque.push(+command[i].slice(10, command[i].length));
        }
        continue;
    }
    if (command[i].includes("pop")) {
        if (command[i].includes("front")) {
            if (deque[0]) {
                result.push(+deque.shift());
            } else {
                result.push(-1);
            }
        }
        if (command[i].includes("back")) {
            if (deque[deque.length - 1]) {
                result.push(+deque.pop());
            } else {
                result.push(-1);
            }
        }
        continue;
    }
    if (command[i].includes("size")) {
        result.push(deque.length);
    }
    if (command[i].includes("empty")) {
        if (deque.length) {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    if (command[i].includes("front")) {
        if (deque[0]) {
            result.push(+deque[0]);
        } else {
            result.push(-1);
        }
    }
    if (command[i].includes("back")) {
        if (deque[deque.length - 1]) {
            result.push(+deque[deque.length - 1]);
        } else {
            result.push(-1);
        }
    }
}
console.log(result.join("\n"));
