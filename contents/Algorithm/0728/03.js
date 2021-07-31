// 후위식 연산(postfix)
function solution (s) {
    let answer;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) {
            stack.push(Number(s[i]));
        } else if (isNaN(Number(s[i]))) {
            let right = stack.pop();
            let left = stack.pop();
            if (s[i] === '+') stack.push(left + right);
            else if (s[i] === '-') stack.push(left - right);
            else if (s[i] === '*') stack.push(left * right);
            else if (s[i] === '/') stack.push(left / right);
        }
    }
    return answer = stack[0];
}
console.log(solution('352+*9-')); // 12
// isNaN() 경우 완전한 NaN 체크 불가. ES6부터 나온 Number.isNaN() 사용 추천
// eval()는 보안 위험이 있음. 아래와 같은 방식 추천
function solution (s) {
    let answer;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) {
            stack.push(Number(s[i]));
        } else if (isNaN(Number(s[i]))) {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(Function('"use strict";return (' + left + s[i] + right + ');')());
        }
    }
    return answer = stack[0];
}
console.log(solution('352+*9-')); // 12