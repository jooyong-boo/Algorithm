const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const K = input.shift();
let result = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
        result.push(input[i]);
    } else if (input[i] === 0) {
        result.pop();
    }
}

console.log(result.reduce((a, b) => a + b, 0));

// 1. input[0]을 제외한 나머지 배열의 길이만큼 for 반복문 실행한다.
// 2. 입력값이 0보다 크면 result에 push해준다.
// 3. 입력값이 0이면 result에서 pop해준다.
// 4. 반복문의 종료되면 result 배열의 각 요소합을 구한다.
