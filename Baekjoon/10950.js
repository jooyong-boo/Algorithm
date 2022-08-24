var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split("\n");

const line = input[0];

for(i = 1; i <= line; i++){
    let count = input[i].split(' ');
    console.log(count[0]/1 + count[1]/1);
}