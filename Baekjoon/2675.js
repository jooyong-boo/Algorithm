const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const testCase = input[0];

for(i = 1; i <= testCase; i++){
    let result = '';
    const repeat = Number(input[i][0]);
    const str = input[i].split(" ")[1];
    for(j = 0; j < str.length; j++){
        for(k = 0; k < repeat; k++){
            result += str[j] ;
        }
    }console.log(result);
}