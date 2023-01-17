const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [N, M] = input[0];
const graph = Array.from({ length: N + 1 }, () => []);
let answer = [];

for (let i = 1; i <= M; i++) {
    let [a, b] = input[i];
    graph[b].push(a);
}

let max = 0;
const DFS = (start) => {
    const stack = [start];
    const visited = Array.from({ length: N + 1 }, () => false);
    let count = 0;
    while (stack.length) {
        let cur = stack.pop();
        visited[cur] = true;
        for (let i = 0; i < graph[cur].length; i++) {
            let value = graph[cur][i];
            if (visited[value]) continue;
            visited[value] = true;
            count += 1;
            stack.push(value);
        }
    }
    if (max < count) {
        max = count;
        answer = [];
        answer.push(start);
    } else if (max === count) {
        answer.push(start);
    }
};

for (let i = 1; i <= N; i++) {
    DFS(i);
}

console.log(answer.join(" "));
