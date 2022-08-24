const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const [A] = input

const one = A % 4;
const two = A % 100;
const three = A % 400;

if((one === 0 && two != 0) || three === 0){
    console.log(1);
} else {
    console.log(0);
}