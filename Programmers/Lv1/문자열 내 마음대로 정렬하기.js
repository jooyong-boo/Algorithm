function solution(strings, n) {
    let answer = [];
    answer = [...strings].sort((a, b) => {
        if (a[n] !== b[n]) {
            return a[n].localeCompare(b[n]);
        } else {
            return a.localeCompare(b);
        }
    });
    return answer;
}
