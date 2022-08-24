const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(" ");

const A = input[0].split("").reverse().join("");
const B = input[1].split("").reverse().join("");;

console.log(Math.max(A, B));