const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

let [M, N, H] = input.shift();
let direction = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, -1],
];

let box = [];

for (let i = 0; i < input.length; i++) {
    box.push(input.slice(i, N + i));
    i += N - 1;
}

let visited = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }).fill(false))
);
let tomato = [];
let unripe = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (box[i][j][k] === 1) {
                tomato.push([k, j, i]);
            }
            if (box[i][j][k] === 0) {
                unripe++;
            }
        }
    }
}

if (!unripe) return console.log(0);

const BFS = (tomato) => {
    let queue = [...tomato];
    let next = [];
    let days = 0;
    let i = 0;
    while (queue.length > i) {
        let [x, y, h] = queue[i];
        i++;
        if (visited[h][y][x]) continue;
        visited[h][y][x] = true;
        box[h][y][x] = 1;
        for (let i = 0; i < direction.length; i++) {
            let [dx, dy, dh] = [
                x + direction[i][0],
                y + direction[i][1],
                h + direction[i][2],
            ];
            if (
                dx < 0 ||
                dy < 0 ||
                dh < 0 ||
                dx >= M ||
                dy >= N ||
                dh >= H ||
                visited[dh][dy][dx] ||
                box[dh][dy][dx] === -1 ||
                box[dh][dy][dx] === 1
            ) {
                continue;
            }
            next.push([dx, dy, dh]);
            box[dh][dy][dx] = 1;
        }
        if (queue.length <= i && next.length) {
            days++;
            i = 0;
            queue = [];
            queue.push(...next);
            unripe -= next.length;
            next = [];
        }
    }
    if (unripe) return -1;

    return days;
};
console.log(BFS(tomato));
