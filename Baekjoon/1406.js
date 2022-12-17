const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const number = input[1];
const command = input.slice(2, input.length).map((item) => item.split(" "));

let left = input[0].split("");
let right = [];

for (let i = 0; i < number; i++) {
    const [cmd, word] = command[i];
    if (cmd === "L" && left.length) {
        right.push(left.pop());
    }
    if (cmd === "D" && right.length) {
        left.push(right.pop());
    }
    if (cmd === "B") {
        left.pop();
    }
    if (cmd === "P") {
        left.push(word);
    }
}

console.log([...left, ...right.reverse()].join(""));

// 커서의 위치를 기준으로 left, right 스택으로 구분.
// right 스택은 마지막에 reverse를 통해 뒤집어준 후에 출력한다.
