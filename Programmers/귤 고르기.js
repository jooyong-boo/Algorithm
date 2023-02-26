function solution(k, tangerine) {
    let answer = 0;
    let result = {};
    for (let i = 0; i < tangerine.length; i++) {
        let value = tangerine[i];
        if (result[value]) {
            result[value] += 1;
        } else {
            result[value] = 1;
        }
    }
    let resultArr = Object.values(result).sort((a, b) => b - a);
    for (const value of resultArr) {
        answer++;
        if (k > value) k -= value;
        else break;
    }
    return answer;
}
