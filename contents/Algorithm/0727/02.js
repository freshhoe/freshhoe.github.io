// 가장 높은 증가수열
// 증가수열이 시작되는 부분부터 다음 숫자와의 차이를 누적하면, 
// 증가수열이 끝나는 부분에서 그 차의 누적합이 해당 증가수열의 높이가 된다.
function solution (nums) {
    let answer = 0;
    let height = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            height += (nums[i] - nums[i - 1]);
        } else {
            answer = Math.max(answer, height);
            height = 0;
        }
    }
    answer = Math.max(answer, height); // 첫 번째 if 조건문에서는 answer 업데이트 부분이 없으므로 for 문 밖에서 누적된 height 값을 업데이트 해줘야 함.
    return answer;
}
console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11])); // 8
console.log(solution([8, 12, 2, 3, 7, 6, 20, 3])); // 14


