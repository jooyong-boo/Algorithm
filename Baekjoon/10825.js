const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const students = input.map((item) => item.split(" "));

const sortStudents = students.sort((a, b) => {
    // 국어 점수가 같지 않으면 국어점수가 감소하는 순서로
    if (+a[1] !== +b[1]) {
        return b[1] - a[1];
        // 국어 점수가 같지 않으면 영어점수가 같지 않은지 검사 후 영어점수가 증가하는 순서로
    } else if (+a[1] === +b[1] && +a[2] !== +b[2]) {
        return a[2] - b[2];
        // 국,영 영어점수가 같으면 수학점수가 같지 않은지 확인 후 수학 점수가 감소하는 순서로
    } else if (+a[1] === +b[1] && +a[2] === +b[2] && +a[3] !== +b[3]) {
        return b[3] - a[3];
        // 모든 점수가 같으면 이름이 사전순으로 증가하는 순서로 (아스키코드여서 오름차순으로 정렬)
    } else {
        for (let i = 0; i < 10; i++) {
            if (a[0].charCodeAt(i) === b[0].charCodeAt(i)) {
                continue;
            } else {
                return a[0].charCodeAt(i) - b[0].charCodeAt(i);
            }
        }
    }
});

const name = sortStudents.map((student) => {
    return student[0];
});

console.log(name.join("\n"));
