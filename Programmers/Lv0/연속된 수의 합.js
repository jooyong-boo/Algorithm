function solution(num, total) {
    let answer = [];
    for (let i = -1000; i <= 1000; i++) {
        if (answer.length === num) answer.shift();
        answer.push(i);
        if (answer.reduce((a, b) => a + b) === total) break;
    }
    return answer;
}
