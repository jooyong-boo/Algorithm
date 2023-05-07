function solution(s) {
    s = s.split("");
    const answer = [];
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            answer.push(i + 1 - map.get(s[i]));
        } else {
            answer.push(-1);
        }
        map.set(s[i], i + 1);
    }
    return answer;
}
