function solution (num, k) {
    let answer;
    let stack = [];
    let s = String(num);
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length-1] < s[i]) {
            stack.push(s[i]);
        } else {
            if (k === 0) {
                stack.push(s[i]);
                continue;
            } else {
                while(stack.length !== 0 && stack[stack.length-1] > s[i]) {
                    stack.pop();
                    k--;
                    if (k === 0) break;
                }
            }
            stack.push(s[i]);  
        }
    }
    
    if (k !== 0) {
        while (k !== 0) {
            stack.pop();
            k--;
        }
    }
    answer = Number(stack.join(''));
    return answer;
}
console.log(solution(1230, 3)); //0
console.log(solution(7612345, 5)); //12
console.log(solution(999102345, 5)); //234
console.log(solution(10000023, 2)); //2
console.log(solution(30000043, 3)); //0
console.log(solution(12345670, 7)); //0
console.log(solution(123456, 3)); //123
console.log(solution(12003, 3)); //0
console.log(solution(9, 1)); //0
console.log(solution(98765432, 7)); //2