const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let totalCoin = Number(input[0].split(" ")[1]);
const coin = input
    .filter((item) => +totalCoin >= +item)
    .sort((a, b) => b - a)
    .map((item) => +item);

let result = 0;
for (let i = 0; i < coin.length; i++) {
    if (totalCoin < coin[i]) {
        continue;
    }
    if (totalCoin % coin[i] >= 0) {
        result += Math.floor(totalCoin / coin[i]);
        totalCoin -= coin[i] * Math.floor(totalCoin / coin[i]);
    }
    if (totalCoin === 0) {
        break;
    }
}
console.log(result);

// 1. 동전을 내림차순으로 정렬
// 2. totalCoin에서 coin[i]를 나눈 나머지가 0보다 크거나 같으면 result에 둘을 나눈 값을 내림하여 더하고
// totalCoin에서 해당 값만큼 뺴준다
// 3. totalCoin보다 coin[i]의 값이 크면 continue하고 totalCoin의 값이 0이면 반복문을 종료한다.
