const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [N, M, V] = input[0];
const egdes = input.slice(1);
let graph = [...Array(N + 1)].map(() => []);
egdes.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
});

const DFS = (start) => {
    let stack = [start];
    let visited = [...Array(N + 1)].fill(false);
    let result = [];

    while (stack.length) {
        let node = stack.pop();
        if (!visited[node]) {
            visited[node] = true;
            stack.push(...graph[node]);
            result.push(node);
        }
    }
    return result;
};

const BFS = (start) => {
    let queue = [start];
    let visited = [...Array(N + 1)].fill(false);
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited[node]) {
            visited[node] = true;
            queue.push(...graph[node]);
            result.push(node);
        }
    }
    return result;
};

graph.forEach((item) => item.sort((a, b) => b - a));
console.log(DFS(V).join(" "));
graph.forEach((item) => item.sort((a, b) => a - b));
console.log(BFS(V).join(" "));
