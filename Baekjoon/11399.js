const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const people = input[0];
const time = input[1]
    .split(" ")
    .map((item) => +item)
    .sort((a, b) => a - b);

let result = 0;
let save = 0;
for (let i = 0; i < people; i++) {
    save += time[i];
    if (save > 0) {
        result += save;
    } else {
        result += time[i];
    }
}

console.log(result);

// 1. 걸리는 시간을 오름차순으로 정렬
// 2. 결과값을 담을 result와 배열을 돌때마다 이전값들을 저장할 save 변수를 선언
// 3. 사람의 수(people)만큼 for문을 실행하여 초기에 save 값이 0일때는 result에 time만 더해주고
// 이후부터는 save 값을 result에 더해준다
