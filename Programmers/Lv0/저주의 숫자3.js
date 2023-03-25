function solution(n) {
    let three = [];

    for (let i = 1; i <= 200; i++) {
        if (i % 3 === 0) continue;
        if (String(i).split("").includes("3")) continue;
        three.push(i);
    }
    return three[n - 1];
}
