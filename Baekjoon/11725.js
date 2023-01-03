const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const N = input.shift()[0];

const tree = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
let result = [...Array(N + 1)].map(() => []);
input.forEach(([from, to], i) => {
    tree[from].push(to);
    tree[to].push(from);
});

const BFS = () => {
    let queue = [1];
    while (queue.length) {
        let node = queue.shift();
        let children = tree[node];
        if (visited[node]) continue;
        visited[node] = true;
        if (children) {
            children.forEach((v) => {
                if (!visited[v]) {
                    result[v] = node;
                    queue.push(v);
                }
            });
        }
    }
};
BFS();
console.log(result.slice(2).join("\n"));
