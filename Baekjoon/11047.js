const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const totalCoin = +input.shift().split(" ")[1];
const coin = input.filter((item) => +totalCoin > +item);

let result = 0;
while (result !== NK[1]) {
    if ()
}
console.log(totalCoin);
