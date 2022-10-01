function averagePair(arr, average) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === average) {
            return true;
        }
        if (avg < average) {
            start += 1;
        }
        if (avg > average) {
            end -= 1;
        }
    }
    return false;
}

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
