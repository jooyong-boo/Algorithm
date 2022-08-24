const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

for(i =0; i < input.length -1; i++){
    let numbers = input[i].split(" ").map(x => x * 1);
    console.log(numbers[0] + numbers[1]);
}