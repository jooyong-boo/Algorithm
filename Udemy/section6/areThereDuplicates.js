function areThereDuplicates(...a) {
    let counter = {};
    for (let i = 0; i < a.length; i++) {
        if (!counter[a[i]]) {
            counter[a[i]] = 1;
        } else {
            counter[a[i]] += 1;
        }
    }

    for (const item in counter) {
        if (counter[item] > 1) {
            return true;
        }
    }
    return false;
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
