const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const value = input
    .slice(1)
    .map((item) => item.split(" ").map((item) => +item))
    .sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

let [initStart, initEnd] = value[0];
let result = [value[0]];
for (let i = 1; i < N; i++) {
    const [start, end] = value[i];
    if (start >= initEnd) {
        result.push(value[i]);
        initEnd = end;
    }
    // if (start >= initEnd && start === end) {
    //     result.push(value[i]);
    // }
}

console.log(result.length);
