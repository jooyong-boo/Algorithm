function solution(num, k) {
    num = String(num).split("");
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) === k) return i + 1;
    }
    return -1;
}
