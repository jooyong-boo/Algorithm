function solution(hp) {
    var answer = 0;
    let count = 0;
    while (hp) {
        if (hp / 5 >= 1) {
            count = Math.floor(hp / 5);
            answer += count;
            hp -= count * 5;
        } else if (hp / 3 >= 1) {
            count = Math.floor(hp / 3);
            answer += count;
            hp -= count * 3;
        } else {
            count = Math.floor(hp / 1);
            answer += count;
            hp -= count * 1;
        }
    }
    return answer;
}
