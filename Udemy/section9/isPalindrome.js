isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false

function isPalindrome(word) {
    // add whatever parameters you deem necessary - good luck!
    if (word.length <= 0) {
        return true;
    }
    if (word.length % 2 === 0) {
        return false;
    } else {
        if (word.length === 1) {
            return true;
        }
    }
    if (word[0] === word[word.length - 1]) {
        return isPalindrome(word.slice(1, word.length - 1));
    } else {
        return false;
    }
}
