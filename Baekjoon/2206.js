const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
    .shift()
    .split(" ")
    .map((value) => +value);

const map = input.map((item) => item.split("").map((value) => +value));
const visited = Array.from({ length: 2 }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }).fill(false))
);

const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
if (N === 1 && M === 1) return console.log(1);

const BFS = (start) => {
    let queue = [[...start, false, 1, 0]];
    let i = 0;
    while (queue.length > i) {
        let [y, x, destroy, count, z] = queue[i];
        i++;
        visited[z][y][x] = true;
        if (y === N - 1 && x === M - 1) return count;
        for (let i = 0; i < direction.length; i++) {
            const [dy, dx] = [y + direction[i][0], x + direction[i][1]];
            if (dy < 0 || dx < 0 || dy >= N || dx >= M || visited[z][dy][dx])
                continue;
            if (dy === N - 1 && dx === M - 1) return count + 1;
            if (destroy) {
                if (map[dy][dx] === 1) continue;
                queue.push([dy, dx, true, count + 1, 1]);
            } else {
                if (map[dy][dx] === 0)
                    queue.push([dy, dx, false, count + 1, 0]);
                if (map[dy][dx] === 1) queue.push([dy, dx, true, count + 1, 1]);
            }
            visited[z][dy][dx] = true;
        }
    }
    return -1;
};

console.log(BFS([0, 0]));
