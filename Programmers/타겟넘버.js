function solution(numbers, target) {
    let count = numbers.length;
    let result = 0;
    const DFS = (value, i) => {
        if (i === count) {
            if (target === value) result++;
        } else {
            DFS(value + numbers[i], i + 1);
            DFS(value - numbers[i], i + 1);
        }
    };

    DFS(0, 0);
    return result;
}
