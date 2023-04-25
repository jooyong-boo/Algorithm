function solution(s) {
    s = s.split("");
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let firstStr = s[0];
        s = s.slice(1);
        s.push(firstStr);
        let stack = [];
        for (let j = 0; j < s.length; j++) {
            if (s[j] === "(" || s[j] === "{" || s[j] === "[") stack.push(s[j]);
            if (s[j] === ")") {
                if (stack[stack.length - 1] === "(") {
                    stack.pop();
                } else {
                    stack.push(s[j]);
                }
            }
            if (s[j] === "}") {
                if (stack[stack.length - 1] === "{") {
                    stack.pop();
                } else {
                    stack.push(s[j]);
                }
            }
            if (s[j] === "]") {
                if (stack[stack.length - 1] === "[") {
                    stack.pop();
                } else {
                    stack.push(s[j]);
                }
            }
        }
        if (!stack.length) count++;
    }
    return count;
}
