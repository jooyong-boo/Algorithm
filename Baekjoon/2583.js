const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [M, N, K] = input.shift();
const direction = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
];
const map = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => false)
);
let area = 0;
let width = [];

for (let i = 0; i < input.length; i++) {
    const [leftX, leftY, rightX, rightY] = input[i];
    for (let y = leftY; y < rightY; y++) {
        for (let x = leftX; x < rightX; x++) {
            map[y][x] = true;
        }
    }
}

const BFS = (start) => {
    let queue = [start];
    let count = 0;
    while (queue.length) {
        let [y, x] = queue.shift();
        if (map[y][x]) continue;
        count++;
        map[y][x] = true;
        for (let i = 0; i < direction.length; i++) {
            let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
            if (dy < 0 || dx < 0 || dy >= M || dx >= N) continue;
            if (map[dy][dx]) continue;
            queue.push([dy, dx]);
        }
    }
    return count;
};

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (!map[i][j]) {
            let result = BFS([i, j]);
            if (result) {
                width.push(result);
                area++;
            }
        }
    }
}

console.log(area + "\n" + width.sort((a, b) => a - b).join(" "));
