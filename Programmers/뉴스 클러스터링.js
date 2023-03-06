function solution(str1, str2) {
    var answer = 0;
    str1 = texting(str1);
    str2 = texting(str2);

    let union = unionFn(str1, str2);
    let intersect = intersectFn(str1, str2);

    function unionFn(first, second) {
        let union = { ...first };
        let result = [];
        for (const key in second) {
            if (union[key]) {
                if (union[key] < second[key]) {
                    union[key] = second[key];
                }
            } else {
                union = { ...union, [key]: second[key] };
            }
        }
        for (const key in union) {
            for (let i = 0; i < union[key]; i++) {
                result.push(key);
            }
        }
        return result;
    }

    function intersectFn(first, second) {
        let intersect = {};
        let result = [];
        for (const key in second) {
            if (first[key]) {
                if (first[key] > second[key]) {
                    intersect = { ...intersect, [key]: second[key] };
                } else {
                    intersect = { ...intersect, [key]: first[key] };
                }
            }
        }
        for (const key in intersect) {
            for (let i = 0; i < intersect[key]; i++) {
                result.push(key);
            }
        }
        return result;
    }

    function texting(str) {
        let arr = [...str.toLowerCase()];
        let result = {};
        for (let i = 0; i < arr.length; i++) {
            let left = arr[i];
            let right = arr[i + 1];
            regex = /[a-zA-Z]/;
            if (
                left &&
                right &&
                isNaN(left) &&
                isNaN(right) &&
                regex.test(left) &&
                regex.test(right)
            ) {
                let sum = left + right;
                result[sum]
                    ? result[sum]++
                    : (result = { ...result, [sum]: 1 });
            }
        }
        return result;
    }

    if (!union.length && !intersect.length) {
        return 65536;
    } else {
        answer = Math.floor(Number((intersect.length / union.length) * 65536));
        return Number(answer);
    }
}
