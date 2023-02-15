const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = Number(input.shift());
let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
let result = [];

let num = 0;

const Fire = () => {
  
}

const BFS = (start, fire, map, visited, w, h) => {
    let queue = [[...start, 0]];
    while (queue.length) {
        let [y, x, count] = queue.shift();
        if (visited[y][x]) continue;
        visited[y][x] = true;
        // for (let i = 0; i < )
        for (let i = 0; i < direction.length; i++) {
            let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
            if (dy < 0 || dy >= h || dx < 0 || dx >= w || visited[dy][dx])
                continue;
            if (typeof map[dy][dx] === undefined) {
                result.push(count + 1);
                break;
            }
            if (map[dy][dx] === "*" || map[dy][dx] === "#") continue;
            queue.push([dy, dx, count + 1]);
        }
    }
};
for (let i = 0; i < testCase; i++) {
    let [w, h] = input[num].split(" ").map((value) => +value);
    let map = input.slice(num + 1, num + 1 + h);
    num += h + 1;
    let start = [];
    let fire = [];
    let visited = Array.from({ length: h }, () => Array(w).fill(false));

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (map[y][x] === "@") start = [y, x];
            if (map[y][x] === "*") fire = [y, x];
        }
    }

    BFS(start, fire, map, visited, w, h);
}

console.log(result);
