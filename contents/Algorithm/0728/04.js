// 연속된 문자 지우기
function solution (s) {
    let answer;
    let stack = [];
    for (i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return answer = stack.join('');
}
console.log(solution('acbbcaa')); // a
console.log(solution('bacccaba')); // bacaba