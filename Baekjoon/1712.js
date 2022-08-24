const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(" ");

const fixedCost = Number(input[0]);
const varCost = Number(input[1]);
const salesCost = Number(input[2]);

const gap = salesCost - varCost;

if(gap > 0){
    console.log(Math.floor(fixedCost / gap) + 1);
} else {
    console.log(-1);
}