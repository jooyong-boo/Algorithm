function maxSubarraySum(arr, length) {
    let start = 0;
    let end = 0 + length;
    let result = 0;
    if (arr.length < length) {
        return null;
    }
    while (end <= arr.length) {
        let sliceArr = arr.slice(start, end);
        let reduceArr = sliceArr.reduce((a, b) => a + b, 0);
        if (result < reduceArr) {
            result = reduceArr;
        }
        start++;
        end++;
    }
    return result;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
123;
