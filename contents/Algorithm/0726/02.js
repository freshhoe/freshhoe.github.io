// # 2
function solution (s1, s2) {
    let answer;
    let one = zero = 0;
    
    for (i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (s1[i] === '1') {
                one++;
            } else {
                zero++;
            }
        }
    }
    answer = Math.max(one, zero);
    return answer;
}
console.log(solution('11000111', '11100110')); // 1
console.log(solution('11000111', '11111110')); // 3