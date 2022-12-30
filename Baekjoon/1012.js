const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [T] = input.shift();
let map, visited;
const direction = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];
let result = [];
const DFS = (from, to, M, N) => {
    const queue = [[from, to]];
    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const [dx, dy] = [x + direction[i][0], y + direction[i][1]];
            if (dx < 0 || dy < 0 || dx >= M || dy >= N) continue;
            if (map[dx][dy] === 1) {
                map[dx][dy] = 0;
                queue.push([dx, dy]);
            }
        }
    }
};

for (let i = 0; i < T; i++) {
    let [M, N, K] = input[i];
    let count = 0;
    let location = input.splice(i + 1, K);
    map = new Array(M).fill(0).map(() => new Array(N).fill(0));
    location.forEach(([from, to]) => {
        map[from][to] = 1;
    });
    for (let x = 0; x < M; x++) {
        for (let y = 0; y < N; y++) {
            if (map[x][y]) {
                map[x][y] = 0;
                DFS(x, y, M, N);
                count++;
            }
        }
    }
    result.push(count);
}

console.log(result.join("\n"));
