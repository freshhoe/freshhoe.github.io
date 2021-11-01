// 연속 부분수열 3
function solution (nums, m) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < nums.length; rt++) {
        sum += nums[rt];
        while (sum > m) {
            sum -= nums[lt++];
        }
        answer += (rt - lt + 1); // rt가 가리키는 단일 원소를 포함해 rt 이하의 가능한 모든 부분수열의 갯수
    }
    return answer;
}
console.log(solution([1, 3, 1, 2, 3], 5)); // 10
console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 15
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); // 22
// sum 은 항상 lt ~ rt 까지의 합. 지속적으로 누적만 하는 합이든 lt 를 갱신하고 빼주는 합이든.