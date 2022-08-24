const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const C = input[0];
for(i = 1; i <= C; i++){
    const N = input[i][0];
    let score = input[i].split(' ');
    let result = 0;
    let count = 0;
    for(j = 1; j <= N; j++){
        let student = Number((input[i].split(" "))[j]);
        result += student;
    }
    let avg = (result / N);   
    for(k = 1; k <= N; k++){
        if(score[k] > avg){
            count++;
        }
    }
    let value = (((count / N) * 100).toFixed(3));
    console.log(value + "%");
}