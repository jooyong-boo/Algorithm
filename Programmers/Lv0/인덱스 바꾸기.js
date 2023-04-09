function solution(my_string, num1, num2) {
    my_string = my_string.split("");
    let str1 = my_string[num1];
    let str2 = my_string[num2];
    my_string[num1] = str2;
    my_string[num2] = str1;
    return my_string.join("");
}
