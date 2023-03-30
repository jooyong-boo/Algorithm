function solution(n) {
    let answer = 0;
    n = String(n).split("");
    return n.reduce((a, b) => Number(a) + Number(b), 0);
}
