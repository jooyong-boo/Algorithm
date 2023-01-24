const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input.shift());

let set = new Set(input.sort((a, b) => a.length - b.length));

const sortWords = [...set].sort((a, b) => {
    if (a.length === b.length) {
        if (a > b) return 1;
        else if (b > a) return -1;
    } else return 0;
});

console.log(sortWords.join("\n"));
