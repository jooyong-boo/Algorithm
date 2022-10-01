const binarySearch = function (arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let half = Math.floor((low + high) / 2);
        if (arr[half] === target) {
            return half;
        } else if (arr[half] < target) {
            low = half + 1;
        } else {
            high = half - 1;
        }
    }

    return -1;
};
