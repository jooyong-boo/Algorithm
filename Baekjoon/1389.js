const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [N, M] = input.shift();
const graph = Array.from({ length: N + 1 }, () => []);
const result = [];
for (let i = 0; i < M; i++) {
    const [A, B] = input[i];
    graph[A].push(B);
    graph[B].push(A);
}

const BFS = (start, target) => {
    const queue = [[start, 0]];
    const visited = Array.from({ length: N + 1 }, () => false);
    while (queue.length) {
        let [cur, count] = queue.shift();
        let friend = graph[cur];
        if (visited[cur]) continue;
        visited[cur] = true;
        if (cur === target) return count;

        for (let i = 0; i < friend.length; i++) {
            let value = friend[i];
            if (visited[value]) continue;
            queue.push([value, count + 1]);
        }
    }
};

for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 1; j <= N; j++) {
        count += BFS(i + 1, j);
    }
    result.push(count);
}

let min = Math.min(...result);
console.log(result.indexOf(min) + 1);
