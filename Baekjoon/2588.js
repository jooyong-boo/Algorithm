const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input;

const C = a * 5;
const D = a * 8;
const E = a * 3;
const result = a * b;

console.log(C);
console.log(D);
console.log(E);
console.log(result);
