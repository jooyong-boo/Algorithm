function solution(dot) {
    const x = dot[0];
    const y = dot[1];

    if (x > 0) {
        if (y > 0) return 1;
        if (y < 0) return 4;
    } else {
        if (y > 0) return 2;
        if (y < 0) return 3;
    }
}
