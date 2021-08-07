//
function solution(nums) {
    let answer = [];
    answer.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        if (answer[answer.length - 1] > 0 && nums[i] < 0) {
            while (answer[answer.length - 1] < Math.abs(nums[i]) &&
                answer[answer.length - 1] !== Math.abs(nums[i]) &&
                answer[answer.length - 1] > 0 && nums[i] < 0) {
                answer.pop();
            }
            if (answer[answer.length - 1] === Math.abs(nums[i])) {
                answer.pop();
                continue;
            } else if (answer[answer.length - 1] > Math.abs(nums[i])) {
                continue;
            } else {
                answer.push(nums[i]);
            }
        } else {
            answer.push(nums[i]);
        }
    }
    return answer;
}
console.log(solution([3, 5, -2, -5])); // [3]
console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]