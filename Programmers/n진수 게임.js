function solution(n, t, m, p) {
    // 진법 n,
    // 미리 구할 숫자의 갯수 t,
    // 게임에 참가하는 인원 m,
    // 튜브의 순서 p
    let answer = "";
    let number = "";

    for (let i = 0; i <= t * m; i++) {
        number += i.toString(n).toUpperCase();
    }

    let lotation = 1;
    for (let i = 0; i < number.length; i++) {
        if (lotation === p) {
            answer += number[i];
        }
        if (lotation >= m) {
            lotation = 1;
        } else {
            lotation += 1;
        }
        if (answer.length === t) break;
    }

    return answer;
}
