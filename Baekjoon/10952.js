const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

for(i =0; i < input.length; i++){
    let numbers = input[i].split(" ").map(x => x * 1);
    if (numbers[0] === 0 && numbers[1] === 0) {
        break;
    }
    console.log(numbers[0] + numbers[1]);
}