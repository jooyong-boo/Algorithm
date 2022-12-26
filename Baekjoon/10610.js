const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .sort((a, b) => b - a)
    .reduce((a, b) => a + b);

if (input[input.length - 1] !== "0") {
    console.log(-1);
} else {
    let sum = input.split("").reduce((a, b) => Number(a) + Number(b));
    if (sum % 3 === 0) {
        console.log(input);
    } else {
        console.log(-1);
    }
}

//30의 배수는 무조건 맨 뒷번호가 0으로 끝나야한다
//0으로 끝난다면 각 숫자의 합이 3으로 나누어 떨어져야 한다
