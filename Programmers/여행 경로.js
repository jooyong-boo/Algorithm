function solution(tickets) {
    tickets.sort();
    let answer = [];
    let visited = Array(tickets.length).fill(false);

    const DFS = (start, cnt, result) => {
        if (cnt === tickets.length && answer.length === 0) {
            answer = result;
            return;
        }
        for (let i = 0; i < tickets.length; i++) {
            if (visited[i]) continue;
            if (tickets[i][0] === start) {
                // 현재 위치와 출발지가 같으면
                visited[i] = true;
                DFS(tickets[i][1], cnt + 1, [...result, tickets[i][1]]);
                visited[i] = false;
            }
        }
    };
    DFS("ICN", 0, ["ICN"]);
    // 다 끝나면 결과값 출력
    return answer;
}
