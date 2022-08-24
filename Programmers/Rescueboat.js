function solution(people, limit) {
    let sortPeople = people.sort((a, b) => b - a); // 내림차순 정렬
    let result = 0; // 결과
    let start = 0; // index 시작점
    let end = sortPeople.length - 1; // index 맨마지막

    // start가 end보다 작거나 같을때까지 반복
    while (start <= end) {
        if (sortPeople[start] + sortPeople[end] <= limit) {
            result += 1;
            start += 1;
            end -= 1;
        } else {
            result += 1;
            start += 1;
        }
    }
    return result;
}

// 풀이
// 1. people 배열을 내림차순으로 정렬
// 2. while 반복문을 통해 start의 값이 end의 값보다 커질때까지 실행
// 3. sortPeople[start]와 sortPeople[end]의 합이 limit보다 작거나 같으면 result에 1을 더하고 start는 1증가 end는 1감소
// 4. sortPeople[start]와 sortPeople[end]의 합이 limit보다 크면 현재 sortPeople[start]값은 남은 배열의 어떤 요소와 더해도 limit을 초과하기때문에 result에 1을 더하고 start만 1증가
// 5. start가 end보다 커지면 반복문 종료 후 result값 리턴
