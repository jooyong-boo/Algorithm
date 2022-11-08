function solution(s) {
    let splitS = s.split("");
    let removeZero = 0;
    let convert = 0;

    while (splitS.length > 1) {
        convert++;
        let newS = [];
        for (let i = 0; i < splitS.length; i++) {
            if (splitS[i] === "0") {
                removeZero++;
            } else {
                newS.push(splitS[i]);
            }
        }
        let newSLength = newS.length;
        splitS = newSLength.toString(2).split("");
    }
    return [convert, removeZero];
}
