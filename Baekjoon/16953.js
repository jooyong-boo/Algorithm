const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let initialValue = input[0];
let target = input[1];
let result = 0;

while (true) {
    if (initialValue === target) {
        break;
    } else if (Number(target) < Number(initialValue)) {
        return console.log(-1);
    }

    if (target % 2 === 0) {
        target = String(target / 2);
    } else if (target % 2 === 1) {
        if (target[target.length - 1] === "1") {
            target = target.slice(0, target.length - 1);
        } else {
            return console.log(-1);
        }
    }

    result++;
}

console.log(result + 1);
