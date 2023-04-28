function solution(skill, skill_trees) {
    let answer = 0;
    for (const tree of skill_trees) {
        let stack = [...skill];
        let check = true;
        for (let i = 0; i < tree.length; i++) {
            const curSkill = tree[i];
            if (stack.length <= 0) break;
            if (stack.includes(curSkill)) {
                if (stack[0] !== curSkill) {
                    check = false;
                    break;
                }
                if (stack[0] === curSkill) stack.shift();
            }
        }
        if (check) answer++;
    }
    return answer;
}
