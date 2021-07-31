// 올바른 괄호
function solution (s) {
    let answer = "YES";
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            num++;
        } else {
            num--;
        }
    }
    if (num !== 0) answer = "NO";
    return answer;
}
function solution2 (s) {
    let answer = "YES";
    let stack = [];
    
    for (i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (stack.length === 0) {
                return answer ="NO";
            } else {
                stack.pop();
            }
        } else {
            stack.push(s[i])
        }
    }
    if (stack.length !== 0) return answer = "NO";
    return answer;
}
console.log(solution('(()(()))(()'));
console.log(solution2('(()(()))(()'));