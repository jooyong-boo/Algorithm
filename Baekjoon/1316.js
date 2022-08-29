const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = input[0];
let word = [];
for (let i = 1; i < input.length; i++) {
    word.push(input[i]);
}
let result = 0;
for (let i = 0; i < number; i++) {
    let check = [];
    for (let j = 0; j < word[i].length; j++) {
        if (check.includes(word[i][j]) === false) {
            check.push(word[i][j]);
        } else {
            if (word[i][j] === word[i][j - 1]) {
                continue;
            } else {
                check = [];
                break;
            }
        }
    }
    if (check.length > 0) {
        result += 1;
    }
}

console.log(result);
