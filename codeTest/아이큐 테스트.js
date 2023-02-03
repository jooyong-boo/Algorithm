const findOneNumber = (numbers) => {
    let arrNum = numbers.split(" ").map((value) => +value);
    let oden = [];
    let even = [];
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            even.push(i + 1);
            if (even.length > 1 && oden.length) {
                return oden[0];
            }
        } else {
            oden.push(i + 1);
            if (oden.length > 1 && even.length) {
                return even[0];
            }
        }
    }
};
