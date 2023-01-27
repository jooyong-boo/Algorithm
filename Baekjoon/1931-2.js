const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const meetingPlan = input
    .map((item) => item.split(" ").map((value) => +value))
    .sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

let result = 1;
let [start, end] = meetingPlan[0];
for (let i = 1; i < N; i++) {
    let [nextStart, nextEnd] = meetingPlan[i];
    if (end > nextStart) {
        continue;
    } else {
        result += 1;
        [start, end] = [nextStart, nextEnd];
    }
}

console.log(result);
