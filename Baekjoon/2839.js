const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let result = 0;

while (true) {
    if (input % 5 === 0) {
        result += input / 5;
        break;
    }

    if (input < 2) {
        result = -1;
        break;
    }

    input -= 3;
    result += 1;
}

console.log(result);

// 1. 최대한 5가 많은게 좋으므로 5로 나누어 떨어지는지부터 확인한다.
// 2. 나누어 떨어지지 않을시 input에 -3을하고 result를 1 증가한다.
// 3. 해당 과정을 input값이 5로 나누어 떨어지거나 3으로 나누어져서 0이 될때까지 반복한다.
// 4. 만약 input 값이 3보다 작으면 5나 3으로 절대 나누어질수 없으므로 -1을 출력한다.
