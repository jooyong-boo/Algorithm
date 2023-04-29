function solution(arr) {
    const min = Math.min(...arr);
    arr = arr.filter((item) => item > min);
    if (arr.length <= 0) return [-1];
    return arr;
}
