const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const set = new Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
    let value = Number(input[i]);
    if (value === 6) {
        if (set[value] > set[9]) {
            set[9] += 1;
        } else {
            set[value] += 1;
        }
        continue;
    }
    if (value === 9) {
        if (set[value] > set[6]) {
            set[6] += 1;
        } else {
            set[value] += 1;
        }
        continue;
    }
    set[value] += 1;
}

let max = Math.max(...set);
console.log(max);
