function solution(n, words) {
    let answer = Array.from(Array(n), () =>
        Array(Math.ceil(words.length / n)).fill()
    );
    let copyWords = words.slice();
    let preWords = copyWords.shift();
    let curWords;
    answer[0][0] = preWords;
    let sequence = 1;
    let count = 0;
    let passWords = [preWords];

    while (copyWords.length !== 0) {
        curWords = copyWords[0];
        copyWords = copyWords.slice(1);

        if (
            curWords.length <= 1 ||
            passWords.includes(curWords) ||
            preWords[preWords.length - 1] !== curWords[0]
        ) {
            return [sequence + 1, count + 1];
        }
        if (preWords[preWords.length - 1] === curWords[0]) {
            answer[sequence][count] = curWords;
            preWords = curWords;
            passWords.push(curWords);
            sequence += 1;
            if (sequence === n) {
                sequence = 0;
                count += 1;
            }
        }
    }
    return [0, 0];
}

//문제링크 https://school.programmers.co.kr/learn/courses/30/lessons/12981

//풀이
// 첫번째 순서는 무조건 입력되고 시작되기에 초기변수에 배열의 첫번째값을 할당해주었다.
// 각 참가자마자 최대 말할 수 있는 길이는 words의 길이 / 참가자수이기에 이걸 기준으로 이차원 배열을 미리 만들어주었다.
// words 배열을 복사하여 새 변수에 할당하였고 새 변수의 길이가 0이 될때까지 while 반복문을 실행하였다.
// 현재 참가자가 말한 단어의 길이가 1이하이거나 이전에 말한 단어이거나 이전에 말한 단어의 마지막과 현재 단어의 첫번째가 일치하지 않을경우 해당 참가자의 번호와 차례를 return한다.
// 그게 아니면 말한단어 목록에 현재 단어를 push하고 이차원 배열의 순서를 변경한다.
// 모든 단어를 다 쓰면 [0, 0]을 return한다.
