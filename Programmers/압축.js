function solution(msg) {
    var answer = [];
    msg = msg.split("");
    let dic = {};
    let charCode = [];
    let idxNum = 27;
    for (let i = 65; i <= 90; i++) {
        charCode.push(String.fromCharCode(i));
    }
    for (let i = 0; i < charCode.length; i++) {
        dic[charCode[i]] = i + 1;
    }

    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];
        let wc = msg[i];
        let whileI = i + 1;

        if (msg[whileI]) {
            while (true) {
                wc += msg[whileI];
                whileI++;
                if (dic[wc]) {
                    w = wc;
                } else {
                    answer.push(dic[w]);
                    i += w.length - 1;
                    dic[wc] = idxNum;
                    idxNum += 1;
                    break;
                }
            }
        } else {
            if (dic[w]) {
                answer.push(dic[w]);
            }
        }
    }
    return answer;
}
