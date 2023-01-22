const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input
    .shift()
    .split(" ")
    .map((value) => +value);
const map = input.map((item) => item.split(" ").map((value) => +value));
const dp = Array.from({ length: M }, () => Array.from({ length: N }, () => -1));
dp[M - 1][N - 1] = 1;

const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

const DFS = (y, x) => {
    if (dp[y][x] !== -1) {
        return dp[y][x];
    }

    let count = 0;

    for (let i = 0; i < direction.length; i++) {
        let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
        if (dy < 0 || dx < 0 || dy >= M || dx >= N) continue;
        if (map[dy][dx] < map[y][x]) count += DFS(dy, dx);
    }

    dp[y][x] = count;
    return count;
};

console.log(DFS(0, 0));
let a = [
    [10, 1, 1, 0],
    [9, 2, 1, 0],
    [7, 3, 1, 0],
    [4, 4, 1, 1],
];
