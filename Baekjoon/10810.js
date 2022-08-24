const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const count = input[0];
const arr = input[1].split(' ').map(v => +v);

arr.sort((a, b) => a - b);

 console.log(arr[0], arr[arr.length-1]);


