// 괄호문자제거
function solution (s) {
    let answer;
    let stack = [];
    for (i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (s[i] === ')') stack.splice(stack.lastIndexOf('('));
    }
    return answer = stack.join('');
}
function solution2 (s) {
    let answer;
    let stack = [];
    for (i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            while (stack.pop() !== '(');
        } else {
            stack.push(s[i]);    
        }
    }
    return answer = stack.join('');
}
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
console.log(solution2('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM