const findFriends = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) result.push(arr[i]);
    }
    return result;
};
