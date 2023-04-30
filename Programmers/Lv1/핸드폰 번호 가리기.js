function solution(phone_number) {
    phone_number = phone_number.split("");
    const left = phone_number.slice(0, -4).map(() => "*");
    const right = phone_number.slice(-4);
    return [...left, ...right].join("");
}
