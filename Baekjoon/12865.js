const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 10 999
// 46 306
// 60 311
// 33 724
// 18 342
// 57 431
// 49 288
// 12 686
// 89 389
// 82 889
// 16 289
let items = input.map((item) => item.split(" "));
let condition = items.shift();
items = items.sort((a, b) => +b[0] - +a[0]);
console.log(items);
const itemNum = +condition[0];
const totalWeight = +condition[1];
let result = [];
let answer = 0;
let total = 0;

for (let i = 0; i < itemNum; i++) {
    answer = +items[i][0];
    total = +items[i][1];
    for (let j = i + 1; j < itemNum; j++) {
        if (answer + Number(items[j][0]) === totalWeight) {
            answer += Number(items[j][0]);
            total += Number(items[j][1]);
            break;
        } else if (answer + Number(items[j][0]) < totalWeight) {
            answer += Number(items[j][0]);
            total += Number(items[j][1]);
        }
    }
    result.push(total);
}

console.log(Math.max(...result));
