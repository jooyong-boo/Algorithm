const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let people = [];
const result = new Array(N).fill(0);

for (let i = 0; i < input.length; i++) {
    people.push(input[i].split(" ").map((x) => +x));
}

for (let i = 0; i < people.length; i++) {
    let rank = 1;
    for (let j = 0; j < people.length; j++) {
        if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
            rank += 1;
        }
    }
    result[i] = rank;
}

console.log(result.join(" ").trim());

// 1. N을 제외한 배열의 길이만큼 0으로 채워진 빈배열 result 생성
// 2. input의 길이만큼 반복문을 실행하여 x와 y을 분리하여 people에 할당
// 3. 배열의 요수중 하나씩 지목하여 x, y의 값을 나머지 요소의 x, y와 비교하여 나머지 요소보다 작으면 rank에 1을 더함
// 4. 내부 반복문이 종료될때마다 i에 값에 해당하는 인덱스에 rank값을 넣어줌
// 5. 출력시 공백으로 한칸씩 띄워주고 좌우 여백이 생길 경우를 고려하여 trim도 해준다.
