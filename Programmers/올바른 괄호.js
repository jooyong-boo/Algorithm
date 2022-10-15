function solution(s) {
    let stack = [];
    let splitS = s.split("");

    // 문자열의 갯수가 홀수이거나
    // 첫번째 문자가 ')'이거나
    // 마지막 문자가 '('일때
    if (
        splitS.length % 2 !== 0 ||
        splitS[0] === ")" ||
        splitS[splitS.length - 1] === "("
    ) {
        return false;
    }

    for (let i = 0; i < splitS.length; i++) {
        let word = splitS[i];
        // stack의 마지막 요소와 word를 더한 값이 '()'와 일치하면
        if (stack[stack.length - 1] + word === "()") {
            // stack에서 pop()
            stack.pop();
        } else {
            // 아니면 stack에 word를 push()
            stack.push(word);
        }
    }

    // stack에 요소가 남아있으면 false 아니면 true
    if (stack.length) {
        return false;
    } else {
        return true;
    }
}
