const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

let N = input;
let result;
let count = 0;

if (Number(N) < 10) {
    N = "0" + N;
}

while (N !== result) {
    count += 1;
    let one = result !== undefined ? result[0] : N[0];
    let two = result !== undefined ? result[1] : N[1];
    let plus = "" + (Number(one) + Number(two));
    result = two[two.length - 1] + plus[plus.length - 1];
}

console.log(count);

// 변수N에 입력값 할당
// N의 값이 10보다 작으면 "0"을 더한다 ex) N === '9' ? N === "09"
// N과 result의 값이 일치할때까지 while 반복문 실행
// 반복문이 실행될때마다 count 값 1 증가
// 변수 one과 two에 result가 undefined면 N의 인덱스값을 넣어주고 undefined가 아니면 result의 인덱스 값을 할당함
// 변수 plus에 one과 two의 값을 더하고 문자열로 변환하여 할당
// 변수 result에 one과 two의 마지막 요소를 더하여 재할당

// 문제점 및 해결방안
// 원래 input의 값을 fs.readFileSync("example.txt").toString()으로만 하여 할당했는데 계속 시간초과가 나왔다.
// 온갖 히든케이스들을 넣어서 실행해도 정답이 다 나오는데도 이상하여 찾아보니 입력값 양옆에 공백이 있을수도 있다는 생각이들어 trim을해서 넣어주니 정상적으로 실행되었다.
