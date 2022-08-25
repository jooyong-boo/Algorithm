const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let iterations = +input[0];

let standard = input[1];
let result = [];
for (let i = 1; i <= iterations; i++) {
    for (let j = 0; j < standard.length; j++) {
        if (standard[j] === input[i][j]) {
            result[j] = standard[j];
        } else {
            result[j] = "?";
        }
    }
    standard = result;
}
console.log(standard.join(""));

// 파일의 개수를 iterations에 할당
// 파일의 첫번째를 기준으로 비교할것이기 때문에 input[1]을 standard에 할당
// 파일의 첫번째를 기준으로하는 1과 파일의 개수(iterations)까지 반복
// 두번째 반복문에는 각 파일의 길이를 기준으로 실행
// standard와 그 다음 파일들의 요소를 각각 비교하여 같으면 요소 그대로를 result에 해당하는 인덱스에 할당하고 틀리면 ?를 할당함
// 내부 반복문이 끝날때마다 standard를 result의 값으로 재할당
// 외부 반복문이 종료되면 값을 join하여 출력한다.
