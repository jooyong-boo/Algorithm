const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [node] = input[0];
const [network] = input[1];
const edges = input.slice(2);

let graph = [...Array(node + 1)].map(() => []);
edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
});

const DFS = (start) => {
    let stack = [start];
    let visited = [...Array(node + 1)].fill(false);
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

graph.forEach((value) => value.sort((a, b) => b - a));
console.log(DFS(1).length - 1);
