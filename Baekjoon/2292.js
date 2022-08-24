const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(" ");

const N = Number(input[0]);

let basic = 1;
let result = 1;

while(basic < N){
    basic += 6 * result;
    result++;
}
console.log(result);