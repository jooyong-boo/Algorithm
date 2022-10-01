function validAnagram(a, b) {
    let result = {};

    for (let item of a) {
        if (result[item]) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    }

    for (let item of b) {
        if (result[item] > 0) {
            result[item] -= 1;
        } else {
            return false;
        }
    }

    for (let key in result) {
        if (result[key] > 0) {
            return false;
        }
    }

    return true;
}

//    validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
