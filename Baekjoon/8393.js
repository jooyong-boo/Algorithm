var fs = require('fs');
var input = fs.readFileSync('./stdin.txt').toString().split(" ");

const n = input[0];
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}
console.log(sum);