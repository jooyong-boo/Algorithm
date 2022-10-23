function solution(A, B) {
    let sortA = A.sort((a, b) => a - b);
    let sortB = B.sort((a, b) => b - a);

    let left = 0;
    let right = sortA.length;

    let sum = 0;

    while (left !== right) {
        sum += sortA[left] * sortB[left];
        left++;
    }
    return sum;
}

//가장 작은값과 가장 큰값을 순차적으로 곱해서 더해주면된다.
