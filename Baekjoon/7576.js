const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
    .shift()
    .split(" ")
    .map((value) => +value);
const box = input.map((item) => item.split(" ").map((value) => +value));
const visited = new Array(M).fill(0).map(() => new Array(N).fill(0));

const direction = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];
let result = 0;
let ripe = 0;
let unripe = 0;
const BFS = (start) => {
    let queue = [...start];
    let q = 0;
    while (queue.length > q) {
        let [x, y] = queue[q];
        q++;
        if (box[x][y]) {
            for (let i = 0; i < 4; i++) {
                let [dx, dy] = [x + direction[i][0], y + direction[i][1]];
                if ((dx < 0) | (dy < 0) | (dx >= M) | (dy >= N)) continue;
                if (box[dx][dy] === -1 || box[dx][dy] >= 1) continue;
                visited[dx][dy] = visited[x][y] + 1;
                box[dx][dy] = 1;
                ripe += 1;
                unripe -= 1;
                result =
                    visited[x][y] + 1 > result ? visited[x][y] + 1 : result;
                queue.push([dx, dy]);
            }
        }
    }
};
let ripeLocation = [];
for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
        if (box[x][y] === 1) {
            ripeLocation.push([x, y]);
            ripe += 1;
        }
        if (box[x][y] === 0) {
            unripe += 1;
        }
    }
}
BFS(ripeLocation);

if (unripe) {
    console.log(-1);
} else {
    console.log(result);
}
