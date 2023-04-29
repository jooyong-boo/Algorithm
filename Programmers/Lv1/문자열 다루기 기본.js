function solution(s) {
    let answer = true;
    s = s.split("");
    if (s.length === 6 || s.length === 4) {
        for (let i = 0; i < s.length; i++) {
            if (isNaN(s[i])) answer = false;
        }
    } else {
        answer = false;
    }
    return answer;
}
