function isSubsequence(a, b) {
    let i = 0;
    let j = 0;

    if (!a) return true;
    while (j < b.length) {
        if (a[i] === b[j]) {
            i++;
        }
        if (i === a.length) {
            return true;
        }
        j++;
    }
    return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
