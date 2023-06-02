function solution(my_string) {
    const word = ["a", "e", "i", "o", "u"];
    return [...my_string].filter((string) => !word.includes(string)).join("");
}
