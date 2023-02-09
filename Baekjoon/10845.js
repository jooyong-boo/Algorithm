const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let queue = [];
let result = [];
for (let i = 0; i < N; i++) {
    let cmd = input[i].split(" ");
    switch (cmd[0]) {
        //   push X: 정수 X를 큐에 넣는 연산이다.
        case "push":
            queue.push(Number(cmd[1]));
            break;
        // pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        case "pop":
            queue.length ? result.push(queue.shift()) : result.push(-1);
            break;
        // size: 큐에 들어있는 정수의 개수를 출력한다.
        case "size":
            result.push(queue.length);
            break;
        // empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
        case "empty":
            queue.length ? result.push(0) : result.push(1);
            break;
        // front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        case "front":
            queue.length ? result.push(queue[0]) : result.push(-1);
            break;
        // back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        case "back":
            queue.length ? result.push(queue.at(-1)) : result.push(-1);
            break;
    }
}

console.log(result.join("\n"));
