function solution(food) {
    const answer = [];
    const left = [];
    const right = [];
    food = food.map((item) => {
        if (item <= 1) return 0;
        if (item > 3) {
            if (item % 2 === 0) {
                return item / 2;
            } else {
                return (item - 1) / 2;
            }
        } else {
            return 1;
        }
    });
    for (let i = food.length - 1; i > 0; i--) {
        for (let j = 0; j < food[i]; j++) {
            left.unshift(i);
            right.push(i);
        }
    }
    return left.join("") + "0" + right.join("");
}
