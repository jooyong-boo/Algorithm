function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);

    const DFS = (idx) => {
        visited[idx] = true;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && computers[idx][i]) {
                DFS(i);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            DFS(i);
        }
    }
    return answer;
}
