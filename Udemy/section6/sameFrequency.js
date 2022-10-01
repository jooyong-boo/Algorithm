function sameFrequency(a, b) {
    let stringA = String(a);
    let stringB = String(b);

    if (stringA.length !== stringB.length) {
        return false;
    }

    let counterA = {};
    let counterB = {};

    for (let i = 0; i < stringA.length; i++) {
        if (!counterA[stringA[i]]) {
            counterA[stringA[i]] = 1;
        } else {
            counterA[stringA[i]] += 1;
        }
        if (!counterB[stringB[i]]) {
            counterB[stringB[i]] = 1;
        } else {
            counterB[stringB[i]] += 1;
        }
    }

    for (let item in counterA) {
        if (!counterB[item] || counterA[item] !== counterB[item]) {
            return false;
        }
    }

    return true;
}

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
