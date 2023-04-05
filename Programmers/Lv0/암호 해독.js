function solution(cipher, code) {
    let answer = "";
    let num = code;
    while (cipher[num - 1]) {
        answer += cipher[num - 1];
        num += code;
    }
    return answer;
}
