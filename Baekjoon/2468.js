const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const N = input.shift()[0];
const map = input.slice();
const visited = Array.from(Array(N + 1), () => Array(N).fill(false));
let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
let result = [];
let max = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        let info = map[i][j];
        if (max < info) {
            max = info;
        }
    }
}

const DFS = (map, visited, safeList) => {
    let stack = [safeList];
    let count = 0;
    while (stack.length) {
        let [x, y] = stack.pop();
        if (!visited[x][y]) {
            visited[x][y] = true;
            count++;
        }
        for (let i = 0; i < direction.length; i++) {
            let [dx, dy] = [x + direction[i][0], y + direction[i][1]];
            if (dx < 0 || dy < 0 || dx >= N || dy >= N) continue;
            if (!visited[dx][dy] && map[dx][dy] > 0) {
                count++;
                visited[dx][dy] = true;
                stack.push([dx, dy]);
            }
        }
    }

    return [count, map, visited];
};

//강수량이 0부터 최대높이까지 내린다고할때
for (let water = 0; water <= max; water++) {
    // map과 visited를 복사한다
    let copyMap = map.map((item) => item.slice());
    let copyVisited = visited.map((item) => item.slice());
    let safeList = [];
    //반복문 실행해서 강수량 이하인 지형들을 물에 잠기게한다
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (copyMap[i][j] <= water) {
                copyMap[i][j] = 0;
                copyVisited[i][j] = true;
            } else {
                safeList.push([i, j]);
            }
        }
    }
    let count = 0;
    for (let i = 0; i < safeList.length; i++) {
        let [value, newMap, newVisited] = DFS(
            copyMap,
            copyVisited,
            safeList[i]
        );
        // 값이 있으면 증가
        if (value) {
            count++;
        }
        // 지도와 방문여부를 최신화해준다.
        copyMap = newMap;
        copyVisited = newVisited;
    }
    result.push(count);
    //DFS 실행해서 [0,0]부터 시작해서 잠기지않은 영역의 갯수를 카운트해서 결과에 넣는다
}

//결과중에서 제일 높은값을 출력한다.
console.log(Math.max(...result));
