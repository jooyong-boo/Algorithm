function findLongestSubstring(word) {
    let start = 0;
    let end = 0;
    let splitWord = word.split("");
    let words = {};
    let count = 0;
    let result = [];

    while (end < splitWord.length) {
        if (!words[splitWord[end]]) {
            words[splitWord[end]] = 1;
            end++;
            count++;
        } else {
            result.push(count);
            count = 0;
            start++;
            end = start;
            words = {};
        }
    }
    result.push(count);

    return Math.max(...result);
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
