const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const [x, y] = input
    .shift()
    .split(" ")
    .map((value) => +value);
const m = Number(input.shift());

const data = input.map((item) => item.split(" ").map((v) => +v));
const graph = Array.from({ length: n + 1 }).map(() => []);
const visited = Array.from({ length: n + 1 }).map(() => false);

for (let i = 0; i < data.length; i++) {
    const [x, y] = data[i];
    graph[x].push(y);
    graph[y].push(x);
}

if (n === 1) return console.log(-1);

const BFS = (start) => {
    const queue = [[start, 0]];

    while (queue.length) {
        let [qx, count] = queue.shift();
        let nearQx = graph[qx];
        if (visited[qx]) continue;
        if (qx === y) return count;
        visited[qx] = true;

        for (let i = 0; i < nearQx.length; i++) {
            let value = nearQx[i];
            if (visited[value]) continue;
            if (value === y) return count + 1;
            queue.push([value, count + 1]);
        }
    }
    return -1;
};

console.log(BFS(x));
