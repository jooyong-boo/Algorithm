function solution(progresses, speeds) {
    let result = [];
    // progresses 배열에 요소가 있으면 반복
    while (progresses.length) {
        // 인덱스와 일치하는 요소를 더해준다
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        // 만약 맨앞의 요소가 100보다 크거나 같으면
        if (progresses[0] >= 100) {
            let continued = [];
            // progresses 길이만큼 반복문 실행
            for (let i = 0; i < progresses.length; i++) {
                // 만약 progresses[i]가 100보다 크거나 같으면
                if (progresses[i] >= 100) {
                    // continued 배열에 추가
                    continued.push(progresses[i]);
                } else {
                    break;
                }
            }
            // 반복문이 다 돌고나서 result에 continued 길이 push
            result.push(continued.length);
            // 0부터 continued 길이만큼 잘라준다
            progresses.splice(0, continued.length);
            speeds.splice(0, continued.length);
        }
    }
    return result;
}
