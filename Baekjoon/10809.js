const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const S = input[0];
let result = [];
for(i = 97; i < 123; i++){
    result += S.indexOf(String.fromCharCode(i))+ " ";
}
console.log(result);