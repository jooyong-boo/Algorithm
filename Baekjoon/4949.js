const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = [];
for (let i = 0; i < input.length - 1; i++) {
    const word = input[i];
    let filtered = [];
    for (let j = 0; j < word.length; j++) {
        if (
            word[j] === "(" ||
            word[j] === ")" ||
            word[j] === "[" ||
            word[j] === "]"
        ) {
            filtered.push(word[j]);
        }
    }
    let stack = [];
    let checkNo = false;
    for (let k = 0; k < filtered.length; k++) {
        if (filtered[k] === "(" || filtered[k] === "[") {
            stack.push(filtered[k]);
        } else if (filtered[k] === ")" || filtered[k] === "]") {
            let check = stack.pop() + filtered[k];
            if (check === "()" || check === "[]") {
                continue;
            } else {
                result.push("no");
                checkNo = true;
                break;
            }
        }
    }
    if (!checkNo) {
        if (stack.length === 0) {
            result.push("yes");
        } else {
            result.push("no");
        }
    }
}
console.log(result.join("\n"));

// https://www.acmicpc.net/problem/4949
