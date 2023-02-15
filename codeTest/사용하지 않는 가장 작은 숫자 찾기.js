const findSmallestNumber = (arr) => {
    const set = new Set(arr);
    const data = [...set].sort((a, b) => a - b);
    for (let i = 0; i < data.length; i++) {
        if (i !== data[i]) return i;
    }
    return data.length;
};
