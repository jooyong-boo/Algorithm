const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((item) => +item);

let N = input[0];
let K = input[1];

let circle = [];
let result = [];

for (let i = 1; i <= N; i++) {
    circle.push(i);
}

let i = K - 1;

while (circle.length > 0) {
    if (i > circle.length - 1) {
        i -= circle.length;
        continue;
    }
    result.push(circle[i]);
    circle.splice(i, 1);
    i += K - 1;
}
result[0] = "<" + String(result[0]);
result[result.length - 1] = String(result[result.length - 1]) + ">";
console.log(result.join(", "));

// 1. N의 값만큼 for 반복문을 통해 circle 배열 생성한다.
// 2. i의 초기값은 K값의 - 1로 할당하고 while 반복문을 실행한다.
// 3. i의 값이 circle 배열의 길이 - 1 보다 크면 i 의 값을 i - circle 배열의 길이만큼 구하여 재할당한다.
// 4. result 배열에 circle[i] 값을 push하며 circle 배열에서 해당 요소를 지워준 다음에 i의 값에 K - 1 값을 더하여 재할당한다.
// 5. while 반복문 종료 후 result 배열 앞뒤에 '<'. '>'를 붙여주고 join 메소드를 통해 출력값을 구한다.
