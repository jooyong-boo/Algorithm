const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(" ");

const A = input[0].split("");

let result = 0;
for(i = 0; i < A.length; i++){
    if(A[i] === 'A' || A[i] === 'B' || A[i] === 'C'){
        result += 3;
    }else if(A[i] === 'D' || A[i] === 'E' || A[i] === 'F'){
        result += 4;
    }else if(A[i] === 'G' || A[i] === 'H' || A[i] === 'I'){
        result += 5;
    }else if(A[i] === 'J' || A[i] === 'K' || A[i] === 'L'){
        result += 6;
    }else if(A[i] === 'M' || A[i] === 'N' || A[i] === 'O'){
        result += 7;
    }else if(A[i] === 'P' || A[i] === 'Q' || A[i] === 'R' || A[i] === 'S'){
        result += 8;
    }else if(A[i] === 'T' || A[i] === 'U' || A[i] === 'V'){
        result += 9;
    }else if(A[i] === 'W' || A[i] === 'X' || A[i] === 'Y' || A[i] === 'Z'){
        result += 10;
    }
}console.log(result);