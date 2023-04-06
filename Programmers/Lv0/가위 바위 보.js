function solution(rsp) {
    const win = {
        2: "0",
        0: "5",
        5: "2",
    };
    let answer = "";
    rsp.split("").map((item) => {
        answer += win[item];
    });
    return answer;
}
