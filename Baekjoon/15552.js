var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split("\n");

const T = input[0];
let answer = '';

for(i = 1; i <= T; i++){
    let count = input[i].split(' ');
    answer += (count[0]/1 + count[1]/1)+ '\n';
}
console.log(answer);