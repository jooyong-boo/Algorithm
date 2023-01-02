const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

let map;
let direction = [
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
];

let num = input.shift()[0];
let result = [];

const BFS = (start, goal, L) => {
    let queue = [start];
    let [goalX, goalY] = goal;
    while (queue.length) {
        let [x, y] = queue.shift();
        if (map[y][x][1]) {
            continue;
        } else {
            map[y][x][1] = true;
        }
        for (let i = 0; i < direction.length; i++) {
            let [dx, dy] = direction[i];
            if (x + dx < 0 || y + dy < 0 || x + dx >= L || y + dy >= L)
                continue;
            if (!map[y + dy][x + dx][1]) {
                map[y + dy][x + dx][0] = map[y][x][0] + 1;
                queue.push([x + dx, y + dy]);
                if (x + dx === goalX && y + dy === goalY) {
                    return map[y + dy][x + dx][0];
                }
            }
        }
    }
};

for (let i = 0; i < input.length; i++) {
    let testCase = input.slice(i, i + 3);
    i = i + 2;
    let L = testCase[0][0];
    let [startX, startY] = testCase[1];
    let [goalX, goalY] = testCase[2];
    map = [...Array(L)].map(() => [...Array(L)].map(() => [0, false]));

    if (startX === goalX && startY === goalY) {
        result.push(0);
    } else {
        result.push(BFS([startX, startY], [goalX, goalY], L));
    }
}

console.log(result.join("\n"));
