const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let up = +input[0];
let down = +input[1];
let total = +input[2];

console.log(Math.ceil((total - down) / (up - down)));

// 1. 하루에 최대 오르는 높이는 up - down
// 2. 정상에 오르기전에 최소 total - down의 값이된다
// 3. 정상 직전 높이와 하루에 최대 오르는 높이를 나누고 정수로 반환해야하기에 Math.ceil을 해준다
