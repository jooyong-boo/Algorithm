function solution(n) {
    n = String(n)
        .split("")
        .reverse()
        .map((item) => +item);
    return n;
}
