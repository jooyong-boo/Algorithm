const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input[0];
let testCase = input.slice(1, input.length);
let result = [];

for (let i = 0; i < num; i++) {
    let keyword = testCase[i].split("");
    let left = [];
    let right = [];
    for (let j = 0; j < keyword.length; j++) {
        let current = keyword[j];
        if (current === "<") {
            left.length && right.push(left.pop());
            continue;
        }
        if (current === ">") {
            right.length && left.push(right.pop());
            continue;
        }
        if (current === "-") {
            left.length && left.pop();
            continue;
        }
        left.push(current);
    }
    result.push([...left, ...right.reverse()]);
}

console.log(result.map((item) => item.reduce((a, b) => a + b)).join("\n"));
