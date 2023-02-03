const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const findNumber = (month) => {
    if (month < 1 || month > 12) return;
    console.log(Math.ceil(month / 3));
};

for (let i = 1; i <= 12; i++) {
    findNumber(i);
}
