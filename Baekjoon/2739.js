var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(" ");

let N = Number(input[0]);

for(i = 1; i < 10; i++){
    console.log(N + " * " + i + " = " + N*i);
}