const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let check = input[0].split("");
let signal = input[1].split("");
let signalLength = input[1].length;
let stack = [];
for (let i = 0; i < check.length; i++) {
    let input = check[i];
    if (signal[signal.length - 1] === input) {
        let checkSignal =
            signalLength > 1
                ? stack.slice(-(signalLength - 1), stack.length)
                : "";
        if (
            JSON.stringify([...checkSignal, input]) === JSON.stringify(signal)
        ) {
            for (let i = 0; i < signalLength - 1; i++) {
                stack.pop();
            }
        } else {
            stack.push(input);
        }
    } else {
        stack.push(input);
    }
}

if (stack.length) {
    console.log(stack.reduce((a, b) => a + b));
} else {
    console.log("FRULA");
}

// 스택에 문자열 앞부터 순서대로 넣는다
// 폭발 문자열의 첫 문자가 나오면 카운트 시작
// 모든 폭발 문자열이 순서대로 나오면 해당 문자들을 pop한다
// 스택을 처음부터 다시 검사해서 폭발 문자열이 있는지 확인한다
// 스택이 0이면 FRULA 출력한다
