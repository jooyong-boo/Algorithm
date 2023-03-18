function solution(common) {
    let answer = 0;

    if (common[1] - common[0] === common.at(-1) - common.at(-2)) {
        answer = common.at(-1) + (common[1] - common[0]);
    } else {
        answer = common.at(-1) * common[1];
    }

    return answer;
}
