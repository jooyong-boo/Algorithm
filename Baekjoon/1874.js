const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const wanted = input.map((item) => +item);
const material = [];
const stack = [];
let result = [];
for (let i = 1; i <= n; i++) {
    material.push(i);
}

let pointer = 0;
for (let i = 0; i < material.length; i++) {
    stack.push(material[i]);
    result.push("+");
    while (
        stack[stack.length - 1] &&
        stack[stack.length - 1] === wanted[pointer]
    ) {
        stack.pop();
        result.push("-");
        pointer++;
    }
}

if (stack.length) {
    console.log("NO");
    return;
}
console.log(result.join("\n"));

// [
//   4, 3, 6, 8,
//   7, 5, 2, 1
// ] [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

//스택에 push할때마다 수열 가능한지 검사
// 가능하면 while 문 돌려서 stack 배열의 뒤에서부터 일치할떄까지 반복
// 일치안하면 다시 스택에 push반복
// 해당 과정을 다 돌고 stack에 값이 남아있다면 no
