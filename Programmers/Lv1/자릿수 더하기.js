function solution(n) {
    n = String(n).split("");
    let total = 0;

    for (let num of n) {
        total += +num;
    }
    return total;
}
