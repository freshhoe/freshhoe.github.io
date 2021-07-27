// 숫자통일 (연속구간의 갯수가 작은 것을 찾는 문제)
function solution( s ) {
    let answer;
    let one = zero = 0;
    if (s[0] === '1') {
        one++;
    } else {
        zero++;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] !== s[i]) {
            if(s[i] === '1') {
                one++;
            } else {
                zero++;
            }
        }
    }
    answer = Math.min(one, zero);
    return answer;
}
console.log(solution('1000011111')); // 1
console.log(solution('10010111100')); // 3