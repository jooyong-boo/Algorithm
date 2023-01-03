const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [N, M] = input[0];
const map = input.slice(1);
let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
let virus = [];
let space = [];
let result = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) {
            space.push([i, j]);
        }
        if (map[i][j] === 2) {
            virus.push([i, j]);
        }
    }
}

let totalSpace = space.length - 3;

for (let i = 0; i < space.length; i++) {
    for (let j = i + 1; j < space.length; j++) {
        for (let k = j + 1; k < space.length; k++) {
            let copyMap = map.map((item) => item.slice());
            let copyVirus = virus.map((item) => item.slice());
            const [a, b] = space[i];
            const [c, d] = space[j];
            const [e, f] = space[k];

            copyMap[a][b] = 1;
            copyMap[c][d] = 1;
            copyMap[e][f] = 1;

            let count = 0;
            // 바이러스 퍼트리면서 count 1씩 증가

            while (copyVirus.length) {
                let [x, y] = copyVirus.shift();
                for (let i = 0; i < direction.length; i++) {
                    let [dx, dy] = direction[i];
                    dx += x;
                    dy += y;
                    if (
                        dx < 0 ||
                        dy < 0 ||
                        dx >= N ||
                        dy >= M ||
                        copyMap[dx][dy] === 1 ||
                        copyMap[dx][dy] === 2
                    )
                        continue;

                    copyMap[dx][dy] = 2;
                    count++;
                    copyVirus.push([dx, dy]);
                }
            }
            result.push(totalSpace - count);
            // 다 퍼진 후 totalSpace에서 count 뺸걸 result에 push;
        }
    }
}

console.log(Math.max(...result));
