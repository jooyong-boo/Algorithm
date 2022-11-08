function solution(n) {
    let result = [0, 1, 2, 3];
    const jump = (num) => {
        result.push((result[num - 2] + result[num - 1]) % 1234567);
    };
    let start = 4;
    // 결과를 도출할때까지 반복
    while (!result[n]) {
        jump(start);
        start++;
    }
    return result[n];
}
