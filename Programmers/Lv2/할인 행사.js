function solution(want, number, discount) {
    let answer = 0;
    for (let i = 0; i < discount.length; i++) {
        const sliceDiscount = discount.slice(i, i + 10);
        const checkNum = [...number];
        if (sliceDiscount.length < 10) break;
        for (let j = 0; j < sliceDiscount.length; j++) {
            const idx = want.indexOf(sliceDiscount[j]);
            if (idx < 0) break;
            checkNum[idx] -= 1;
        }
        if (checkNum.filter((num) => num === 0).length === want.length) {
            answer += 1;
        }
    }
    return answer;
}
