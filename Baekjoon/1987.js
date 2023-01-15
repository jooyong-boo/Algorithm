const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ");
const map = input.map((item) => item.split(""));
let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
let result = 1;
let visited = Array(26).fill(false);

const DFS = (x, y, count) => {
    result = Math.max(result, count);
    for (let i = 0; i < direction.length; i++) {
        let [dx, dy] = [x + direction[i][0], y + direction[i][1]];
        if (dx < 0 || dy < 0 || dx >= C || dy >= R) continue;
        let dValue = map[dy][dx].charCodeAt() - 65;
        if (visited[dValue]) continue;
        visited[dValue] = true;
        DFS(dx, dy, count + 1);
        visited[dValue] = false;
    }
};
visited[map[0][0].charCodeAt() - 65] = true;
DFS(0, 0, 1);
console.log(result);
