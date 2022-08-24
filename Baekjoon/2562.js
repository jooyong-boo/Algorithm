const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");


const allNumber = input.map(x => +x);
const maxNumber = allNumber.reduce( function (prev, cur) {
    return prev > cur ? prev : cur;
});
console.log(maxNumber);
for(i = 0; i <= allNumber.length; i++){
    if (allNumber[i] === maxNumber){
        console.log(i+1);
    }
}