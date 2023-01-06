const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map((value) => +value);
let map = input.slice(1).map((item) => item.trim().split(""));
let visited = Array.from({ length: R }, () =>
    Array.from({ length: C }).fill(false)
);
const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

let water = [];
let hedge = [];

for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        const value = map[i][j];
        if (value === "S") {
            hedge.push([i, j]);
        }
        if (value === "*") {
            water.push([i, j]);
        }
    }
}

const wBFS = () => {
    let nextWater = [];
    for (let i = 0; i < water.length; i++) {
        let [wr, wc] = water[i];
        visited[wr][wc] = true;
        for (let j = 0; j < direction.length; j++) {
            let [dwr, dwc] = [wr + direction[j][0], wc + direction[j][1]];
            if (
                dwr < 0 ||
                dwc < 0 ||
                dwr >= R ||
                dwc >= C ||
                map[dwr][dwc] === "X" ||
                map[dwr][dwc] === "D" ||
                map[dwr][dwc] === "*"
            )
                continue;
            map[dwr][dwc] = "*";
            visited[dwr][dwc] = true;
            nextWater.push([dwr, dwc]);
        }
    }
    if (nextWater.length) {
        water = [];
        water.push(...nextWater);
    }
};

const BFS = (start) => {
    let queue = [[...start, 0]];
    let next = [];
    while (queue.length) {
        wBFS();
        for (let i = 0; i < queue.length; i++) {
            let [r, c, cnt] = queue[i];
            visited[r][c] = true;
            if (map[r][c] === "D") return cnt;
            for (let i = 0; i < direction.length; i++) {
                let [dr, dc] = [r + direction[i][0], c + direction[i][1]];
                if (
                    dr < 0 ||
                    dc < 0 ||
                    dr >= R ||
                    dc >= C ||
                    map[dr][dc] === "X" ||
                    map[dr][dc] === "*" ||
                    visited[dr][dc]
                )
                    continue;
                if (map[dr][dc] === "D") return cnt + 1;
                visited[dr][dc] = true;
                next.push([dr, dc, cnt + 1]);
            }
        }
        if (next.length) {
            queue = [];
            queue.push(...next);
            next = [];
        } else {
            return "KAKTUS";
        }
    }
    return "KAKTUS";
};

console.log(BFS(...hedge));
