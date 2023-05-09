function solution(name, yearning, photo) {
    const nameYear = new Map();
    name.forEach((item, idx) => nameYear.set(item, yearning[idx]));
    const answer = [];
    for (let i = 0; i < photo.length; i++) {
        let total = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (nameYear.get(photo[i][j])) {
                total += nameYear.get(photo[i][j]);
            }
        }
        answer.push(total);
    }
    return answer;
}
