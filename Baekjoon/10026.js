const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const map = input.map((item) => item.split(""));
const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
const BFS = (start, map, N, weakness, visited, color) => {
    let queue = [start];
    let count = 0;
    while (queue.length) {
        let [x, y] = queue.shift();
        if (visited[x][y]) continue;
        visited[x][y] = true;
        count++;
        for (let i = 0; i < direction.length; i++) {
            let [dx, dy] = [x + direction[i][0], y + direction[i][1]];
            if (dx < 0 || dy < 0 || dx >= N || dy >= N) continue;
            if (visited[dx][dy]) continue;
            if (weakness) {
                if (
                    (color === "R" || color === "G") &&
                    (map[dx][dy] === "R" || map[dx][dy] === "G")
                ) {
                    queue.push([dx, dy]);
                }
                if (color === "B" && map[dx][dy] === "B") {
                    queue.push([dx, dy]);
                }
            } else {
                if (color === "R" && map[dx][dy] === "R") {
                    queue.push([dx, dy]);
                }
                if (color === "G" && map[dx][dy] === "G") {
                    queue.push([dx, dy]);
                }
                if (color === "B" && map[dx][dy] === "B") {
                    queue.push([dx, dy]);
                }
            }
        }
    }
    return count;
};

let result = [0, 0];
for (let total = 0; total < 2; total++) {
    let mode = [false, true];
    let count = 0;
    let visited = Array.from({ length: N }, () => Array(N).fill(false));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (visited[i][j]) continue;
            count = BFS([i, j], map, N, mode[total], visited, map[i][j]);
            if (count > 0) result[total] += 1;
        }
    }
}

console.log(result.join(" "));
