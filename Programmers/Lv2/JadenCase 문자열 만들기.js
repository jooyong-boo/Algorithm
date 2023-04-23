function solution(s) {
    let prevWord = " ";
    let result = "";
    for (let i = 0; i < s.length; i++) {
        const currentWord = s[i];
        if (prevWord === " " && currentWord !== "") {
            result += currentWord.toUpperCase();
        } else {
            result += currentWord.toLowerCase();
        }
        prevWord = currentWord;
    }
    return result;
}
