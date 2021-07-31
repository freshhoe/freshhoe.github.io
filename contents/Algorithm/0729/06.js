// 연속된 자연수의 합
function solution (n) {
    let answer = 0;
    let sum = 0;
    let m = parseInt(n/2) + 1; // n / 2 + 1 까지 확인
    let nums = Array.from({length: m}, (v, i) => i + 1);
    let lt = 0;
    for (let rt = 0; rt < m; rt++) {
        sum += nums[rt];
        if (sum === n) answer++;
        while (sum > n) {
            sum -= nums[lt++];
            if (sum === n) answer++;
        }
    }
    return answer;
}
function solution2 (n) {
    let answer = 0;
    let cnt = 1;
    n--;
    while (n > 0) {
        cnt++;
        n -= cnt;
        if (n % cnt === 0) answer ++;
    }
    return answer;
}
console.log(solution(15)) // 3
console.log(solution(45678)) // 7
console.log(solution(98765)) // 3
console.log(solution2(15)) // 3
console.log(solution2(45678)) // 7
console.log(solution2(98765)) // 3

