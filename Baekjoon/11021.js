const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const T = Number(input[0]);
let answer = "";
for(i = 1; i <=T; i++){
    let count = input[i].split(' ');
    answer += "Case #" + i + ": " + (Number(count[0]) + Number(count[1])) + '\n';
    }
   console.log(answer);  