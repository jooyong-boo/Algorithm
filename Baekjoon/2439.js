const fs = require('fs');
const input = fs.readFileSync('./stdin.txt').toString().split(" ");

const N = Number(input[0]);

for(i = 1; i <=N; i++){
    let space = "";

    for(j = N -1; j >= 0; j--){
        space += j <= i-1 ? "*" : " ";
    }
    console.log(space);
}