const fs = require("fs");

const range = 10000;
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i < range; i++) {
    selfNumbers[selfNumber(String(i))] = false;
}

for (let i = 0; i < selfNumbers.length; i++) {
    if (selfNumbers[i]) {
        console.log(i);
    }
}

function selfNumber(item) {
    if (item < 10) {
        item = "0" + item;
    }
    let result = Number(item);
    for (let i = 0; i < item.length; i++) {
        result += Number(item[i]);
    }
    return result;
}

// 1. 길이가 10000이고 true로 채워진 배열 생성
// 2. 해당 배열을 반복문을 실행하여 함수 selfNumber의 인자로 인덱스 값을 넣어서 실행
// 3. item의 값이 10보다 작으면 앞에 0을 붙인다
// 4. result 변수에 타입이 number인 item 할당
// 5. 타입이 string인 item을 기준으로 반복문을 실행하여 result에 각 숫자를 더하여 반환
// 6. 반환된 값고 일치하는 인덱스 요소의 값을 false로 변경
// 7. 해당 반복문이 종료되면 또 다른 반복문을 실행하여 selfNumbers의 요소중에 값이 true인 인덱스 값만 출력
