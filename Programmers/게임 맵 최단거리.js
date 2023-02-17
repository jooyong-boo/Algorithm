function solution(maps) {
    let answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    let visited = new Array(n).fill([]).map(() => new Array(m).fill(false));
    let direction = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    let i = 0;
    const BFS = (start) => {
        let queue = [[start, 0]];
        while (queue.length > i) {
            let [[y, x], count] = queue[i];
            i++;
            if (y === n - 1 && x === m - 1) {
                answer = count + 1;
                break;
            }
            if (visited[y][x]) continue;
            visited[y][x] = true;
            for (let i = 0; i < direction.length; i++) {
                let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
                if (dy < 0 || dx < 0 || dy >= n || dx >= m) continue;
                if (visited[dy][dx] || maps[dy][dx] === 0) continue;
                queue.push([[dy, dx], count + 1]);
            }
        }
    };

    BFS([0, 0]);

    if (answer) {
        return answer;
    } else {
        return -1;
    }
}
