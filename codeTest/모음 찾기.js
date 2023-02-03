function countVowels(text) {
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) !== -1) {
            count++;
        }
    }

    return count;
}
