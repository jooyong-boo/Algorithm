const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [n, m] = input.shift();
const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
);
let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
let answer = 0;
let result = [];
const BFS = (start) => {
    let queue = [start];
    let total = 0;
    while (queue.length) {
        let [y, x] = queue.shift();
        if (visited[y][x]) continue;
        visited[y][x] = true;
        total++;
        for (let i = 0; i < direction.length; i++) {
            let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
            if (dy < 0 || dx < 0 || dy >= n || dx >= m) continue;
            if (visited[dy][dx]) continue;
            if (input[dy][dx] === 1) {
                queue.push([dy, dx]);
            }
        }
    }
    if (total) {
        answer++;
        result.push(total);
    }
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (input[i][j] === 1 && !visited[i][j]) {
            BFS([i, j]);
        }
    }
}
if (!answer) return console.log(0 + "\n" + 0);
console.log(answer + "\n" + Math.max(...result));
