const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((value) => +value);

const [N, K] = input;
const visited = new Array(100001).fill(false);
const BFS = (start) => {
    let queue = [start];
    while (queue.length) {
        let [current, time] = queue.shift();
        if (current === K) {
            return time;
        }
        if (current + 1 === K || current - 1 === K || current * 2 === K) {
            return time + 1;
        }
        if (!visited[current + 1] && current + 1 <= 100000) {
            visited[current + 1] = [current + 1, time + 1];
            queue.push([current + 1, time + 1]);
        }
        if (!visited[current - 1] && current - 1 >= 0) {
            visited[current - 1] = [current - 1, time + 1];
            queue.push([current - 1, time + 1]);
        }
        if (!visited[current * 2] && current < K) {
            visited[current * 2] = [current * 2, time + 1];
            queue.push([current * 2, time + 1]);
        }
    }
};

console.log(BFS([N, 0]));
