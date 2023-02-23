function solution(clothes) {
    let answer = 1;
    let hash = {};
    for (let i = 0; i < clothes.length; i++) {
        let [value, key] = clothes[i];
        if (hash[key]) {
            hash[key].push(value);
        } else {
            hash[key] = [value];
        }
    }

    Object.values(hash).forEach((value) => {
        answer *= value.length + 1;
    });

    return answer - 1;
}
