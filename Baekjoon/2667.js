const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const map = input.map((item) => item.split("").map((value) => +value));
const visited = new Array(N).fill(0).map(() => new Array(N).fill(0));
const direction = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];
let count = [];

const DFS = (col, row) => {
    const stack = [[col, row]];
    let result = 0;
    while (stack.length) {
        let [x, y] = stack.pop();
        if (map[x][y] && !visited[x][y]) {
            result++;
            visited[x][y] = 1;
            for (let i = 0; i < 4; i++) {
                let [dx, dy] = [x + direction[i][0], y + direction[i][1]];
                if (dx < 0 || dy < 0 || dx >= N || dy >= N) continue;
                if (map[dx][dy] && !visited[dx][dy]) {
                    stack.push([dx, dy]);
                }
            }
        }
    }
    if (result > 0) {
        count.push(result);
    }
};

for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
        if (map[x][y] && !visited[x][y]) {
            DFS(x, y);
        }
    }
}

console.log(count.length + "\n" + count.sort((a, b) => a - b).join("\n"));
