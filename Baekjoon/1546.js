const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = input[0];
const result = input[1].split(" ").map(x => +x);
const maxResult = Math.max(...result);
let grade = 0;
for(i = 0; i < N; i++){
        grade += (result[i] / maxResult) * 100;
}
console.log(grade / N);