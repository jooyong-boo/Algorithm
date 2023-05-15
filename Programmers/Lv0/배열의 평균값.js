function solution(numbers) {
    let answer = 0;
    answer = numbers.reduce((a, b) => a + b);
    return answer / numbers.length;
}
