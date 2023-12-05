function solution(k, m, score) {
    const sortScore = score.sort();
    const boxes = [];
    let totalPrice = 0;
    while (true) {
        const box = sortScore.splice(-m);
        if (box.length < m) break;
        boxes.push(box);
    }
    for (const box of boxes) {
        const min = Math.min(...box);
        totalPrice += min * m;
    }
    return totalPrice;
}
