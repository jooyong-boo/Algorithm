function solution(num_list) {
    let odd = [];
    let even = [];

    for (let num of num_list) {
        if (num % 2) {
            odd.push(num);
        } else {
            even.push(num);
        }
    }
    return [even.length, odd.length];
}
