function solution(A, B) {
    var answer = 0;
    A = A.split("");
    B = B.split("");

    while (answer < A.length) {
        if (A.join() !== B.join()) {
            A.unshift(A.pop());
            answer++;
        } else {
            return answer;
        }
    }
    return -1;
}
