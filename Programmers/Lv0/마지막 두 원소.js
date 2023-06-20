function solution(list) {
    const last = list[list.length - 1];
    const prev = list[list.length - 2];
    if (last > prev) {
        return [...list, last - prev];
    } else {
        return [...list, last * 2];
    }
}
