function solution(s) {
    // 공백 기준으로 분리하고 오름차순으로 정렬한뒤 number 타입으로 변환
    let splitS = s
        .split(" ")
        .sort((a, b) => +a - +b)
        .map((item) => +item);
    // 최솟값은 배열의 0번째 요소, 최대값은 배열의 마지막 요소
    let min = splitS[0];
    let max = splitS[splitS.length - 1];

    let result = `${min + " " + max}`;
    return result;
}
