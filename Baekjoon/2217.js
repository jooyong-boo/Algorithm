const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const N = input.shift();
const sortLope = input.sort((a, b) => b - a);

let maxWeigth = 0;

for (let i = 0; i < N; i++) {
    if (maxWeigth < sortLope[i] * (i + 1)) {
        maxWeigth = sortLope[i] * (i + 1);
    }
}

console.log(maxWeigth);

// 1. 버틸 수 있는 최대중량은 고른 로프중 제일 낮은 로프 * 로프의 갯수이다.
// 2. 로프의 갯수만큼 for반복문을 실행하여 계산 후 출력한다.
