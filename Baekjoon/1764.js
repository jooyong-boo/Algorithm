const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let [N, M] = input
    .shift()
    .split(" ")
    .map((item) => +item);

let peopleN = new Set();
let peopleM = new Set();

for (let i = 0; i < input.length; i++) {
    if (i < N) {
        peopleN.add(input[i]);
    } else {
        peopleM.add(input[i]);
    }
}
let result = [];
peopleN.forEach((item) => {
    if (peopleM.has(item)) {
        result.push(item);
    }
});
result.sort();

console.log(result.length);
console.log(result.join("\n"));

// 1. peopleN과 peopleM을 빈 set객체로 만든다.
// 2. 입력값 첫줄을 제외한 요소를 반복문 실행하여 N보다 작으면 peopleN에 추가하고 아니면 peopleM에 추가한다.
// 3. 둘중 어떤걸 forEach 하든 상관없으며 두 set객체의 교집합을 구하여 result 배열에 push 해준다.
// 4. result의 길이와 result의 각 요소를 join('\n')으로 한줄씩 넘겨서 출력한다.
