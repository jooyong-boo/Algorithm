function solution(n) {
    let result = 0; // 결과값
    let initialValue = 1; // 기본값
    let start = 1; // 시작값
    let num = 0; // 더해진 값

    // 시작값이 n과 같지않으면
    while (start !== n) {
        num += start; // num에 시작값을 더해준다
        if (num > n) {
            // num이 n보다 크면 기본값 1증가 시작값은 기본값으로 재할당, num 0으로 초기화
            initialValue++;
            start = initialValue;
            num = 0;
        } else if (num === n) {
            // 결과값, 기본값 1증가 시작값에 기본값 재할당
            result++;
            initialValue++;
            start = initialValue;
            num = 0;
        } else {
            //num < n 이면 start만 1증가
            start++;
        }
    }
    if (start === n) {
        // 최종 시작값이 n과 같으면 result 1증가
        result++;
    }
    return result;
}
