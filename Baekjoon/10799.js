const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === ")") {
        if (input[i - 1] === "(") {
            stack.pop();
            result += stack.length;
        } else {
            result += 1;
            stack.pop();
        }
    } else {
        stack.push(input[i]);
    }
}

console.log(result);

//스택 ')'가 나왔을때 직전이 '('라면 여태 쌓인 막대기의 갯수를 결과에 ++하고 스택 맨 마지막 제거
// 직전이 '('가 아니라면 스택 맨 마지막 제거하고 +1 추가;
//
