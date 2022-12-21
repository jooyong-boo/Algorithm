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
