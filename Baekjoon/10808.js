const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(input[1]);

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 97] += 1;
}
console.log(result.join(" "));
