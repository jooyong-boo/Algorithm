function solution(s) {
    // '{',와 '}을 반복문을 통해서 다 제거해준다.
    let splitS = s
        .slice(1, s.length - 1)
        .split(",")
        .map((item) => {
            if (item[0] === "{" && item[item.length - 1] === "}") {
                item = item.slice(1, item.length - 1);
                return item;
            }
            if (item[0] === "{") {
                item = item.slice(1);
                return item;
            }
            if (item[item.length - 1] === "}") {
                item = item.slice(0, item.length - 1);
                return item;
            }
            return item;
        });
    let result = {};
    // 객체에 숫자를 key 숫자가 나오는만큼 1씩 증가시켜준다.
    for (let i = 0; i < splitS.length; i++) {
        if (!result[`${splitS[i]}`]) {
            result[`${splitS[i]}`] = 1;
        } else {
            result[`${splitS[i]}`] += 1;
        }
    }
    // 객체의 key와 value를 배열로 바꿔서 value값을 기준으로 내림차순으로 정렬해준다.
    let sorted = Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .map((item) => {
            return +item[0];
        });
    return sorted;
}
