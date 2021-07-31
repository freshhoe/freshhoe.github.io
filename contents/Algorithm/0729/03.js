// 연속 부분수열 1
function solution (nums, m) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < nums.length; rt++) { // 인덱스 증가하는 반복문 한 번 수행 후 증가하는 것.
        sum += nums[rt];
        if (sum === m) answer++; // sum 에 대한 변화를 주는 코드 다음에는 조건문으로 확인 과정이 필요함.
        while (sum > m) {
            sum -= nums[lt]; // sum -= nums[lt++]; 와 동일
            lt++;
            if (sum === m) answer++;
        }
    }
    return answer;
}
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 4
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); // 6
