var fs = require('fs');
var input = fs.readFileSync('/dev/stdin.txt').toString().split(" ");

let H = Number(input[0]); 
let M = Number(input[1]);  

let hourMinus = H - 1;
let minPlus = M + 15;
let minMinus = M - 45;

if (M >= 45 && H > 0){
    console.log(H, minMinus);
} else if (M < 45 && H > 0){
    console.log(hourMinus, minPlus);
} else if (H === 0 && M < 45){
    console.log(23, minPlus);
} else if (H === 0 && M >= 45) {
    console.log(23 , minMinus);
}
