const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

let num = input.shift();
let answer = [];
for (let i = 0; i < num; i++) {
    const [N, M] = input.shift();
    const docs = input.shift();
    const id = [];
    for (let i = 1; i <= N; i++) {
        id.push(i);
    }
    const target = id[M];
    let result = 1;
    while (docs.length > 0) {
        let curDoc = docs.shift();
        let trueCheck = docs.filter((ele) => ele > curDoc);
        if (trueCheck.length === 0) {
            if (id[0] === target) {
                answer.push(result);
                break;
            }
            id.shift();
            result++;
        } else {
            docs.push(curDoc);
            id.push(id.shift());
        }
    }
}

console.log(answer.join("\n").trim());

//https://www.acmicpc.net/problem/1966
