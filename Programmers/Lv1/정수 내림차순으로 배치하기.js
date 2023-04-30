function solution(n) {
    n = String(n)
        .split("")
        .map((item) => +item)
        .sort((a, b) => b - a);
    return Number(n.join(""));
}
