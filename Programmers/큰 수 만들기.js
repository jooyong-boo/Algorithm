function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        let value = number[i];
        while (k && stack.at(-1) && stack.at(-1) < value) {
            stack.pop();
            k--;
        }
        stack.push(value);
    }
    if (k) {
        stack.splice(-k);
    }
    return stack.join("");
}
