const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const N = input[0];

for(i = 1; i <= N; i++){
    let num = 0;
    let sum = 0;
    for(x = 0; x < input[i].length; x++){
        if(input[i][x] === 'O'){
            num++;
        } else {
            num = 0;
        }
        sum += num;
    } 
    console.log(sum);
}