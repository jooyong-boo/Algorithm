function solution(quiz) {
    var answer = [];
    quiz = quiz.map((item) => item.split(" "));
    for (let i = 0; i < quiz.length; i++) {
        let cur = quiz[i];
        let result = 0;
        for (let j = 0; j < cur.length; j++) {
            if (cur[j] === "+") {
                result += Number(cur[j - 1]) + Number(cur[j + 1]);
            }
            if (cur[j] === "-") {
                result += Number(cur[j - 1]) - Number(cur[j + 1]);
            }
            if (cur[j] === "=") {
                if (Number(cur[j + 1]) === result) {
                    answer.push("O");
                } else {
                    answer.push("X");
                }
                break;
            }
        }
    }
    return answer;
}
