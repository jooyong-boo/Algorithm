const findMiddleNumber = (arr) => {
    const sortArr = [...arr].sort((a, b) => a - b);
    let idx = arr.indexOf(sortArr[1]);
    return idx;
};
