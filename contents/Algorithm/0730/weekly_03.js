function solution (s) {
    let answer = '';
    s = s.split('');
    let stack = [];
    let num = [];
    
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) { // 별도의 스택에 따로 반복횟수 push
            if (Number(s[i+1])) num.push(Number(s[i] + s[i+1])); // 두 자리 숫자면 합쳐서 push
            num.push(s[i]);
            continue;
        } else if (s[i] !== ')') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            let str = []; // 별도의 스택에 문자열 push
            str.push(stack.splice(stack.lastIndexOf('(') + 1).join('')); // '(' 앞 문자부터 스택에 쌓인 문자열 끝까지 배열이 아닌 문자열로 만들어 push
            stack.pop(); // '(' 제거
            for (let i = 0; i < num[num.length-1]; i++) {
                stack.push(str); // num stack의 마지막 숫자만큼 str 에 있는 문자열을 반복해서 stack에 push
            }
            num.pop(); // 사용한 반복횟수는 제거
        }
    }
    return answer = stack.join('');
}
console.log(solution('2(ab)k3(bc)')); // ababkbcbcbc
console.log(solution('3(a2(b))ef')); // abbabbabbef

