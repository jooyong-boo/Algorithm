function solution(dirs) {
    let answer = 0;
    dirs = dirs.split("");
    const command = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0],
    };
    const set = new Set();

    let [curX, curY] = [0, 0];
    for (let i = 0; i < dirs.length; i++) {
        const cmd = dirs[i];
        const [x, y] = command[cmd];
        if (curY + y > 5 || curY + y < -5 || curX + x > 5 || curX + x < -5)
            continue;

        if (!set.has(`${curY} ${curX} ${curY + y} ${curX + x}`)) {
            set.add(`${curY} ${curX} ${curY + y} ${curX + x}`);
            set.add(`${curY + y} ${curX + x} ${curY} ${curX}`);
            answer += 1;
        }
        [curX, curY] = [curX + x, curY + y];
    }
    return answer;
}
