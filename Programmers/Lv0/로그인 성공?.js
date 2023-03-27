function solution(id_pw, db) {
    var answer = "";
    let [id, pw] = id_pw;
    answer = db.filter(([DBid, DBpw]) => {
        return DBid === id;
    });
    if (!answer.length) return "fail";
    answer = answer.filter(([DBid, DBpw]) => {
        return DBpw === pw;
    });
    if (answer.length) {
        return "login";
    } else {
        return "wrong pw";
    }
}
