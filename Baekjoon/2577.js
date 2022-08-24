const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const A = input[0];
const B = input[1];
const C = input[2];

const result = (A * B * C);

function search(result) {
    return (result + '').split('').map(x => +x);
  }

const changeNumber = search(result).map(y => +y);

for(i = 0; i <= 9; i++){
    let count =
    changeNumber.filter(element => i === element).length;
    console.log(count);
}