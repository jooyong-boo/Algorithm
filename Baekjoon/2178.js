const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((value) => +value);
const maze = input
    .slice(1)
    .map((item) => item.split("").map((value) => +value));
const direction = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];

const BFS = (row, col) => {
    let queue = [[row, col]];
    let visited = new Array(N).fill(0).map(() => new Array(M).fill(0));
    visited[row][col] = 1;
    while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let [dx, dy] = [x + direction[i][0], y + direction[i][1]];
            if (dx < 0 || dy < 0 || dx >= N || dy >= M) continue;
            if (maze[dx][dy] && !visited[dx][dy]) {
                visited[dx][dy] = visited[x][y] + 1;
                queue.push([dx, dy]);
                if (dx === N - 1 && dy === M - 1) {
                    return visited[dx][dy];
                }
            }
        }
    }
};

console.log(BFS(0, 0));
