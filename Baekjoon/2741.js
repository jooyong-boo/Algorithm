const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(" ");

const N = input[0];
let answer = '';

for(i = 1; i <= N; i++){
    answer += i + '\n'
}
console.log(answer);