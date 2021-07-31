// 바이토닉 수열
// 오늘 퀴즈
function solution (nums) {
    let answer = 'YES'
    let N = nums.length;
    let i = 0;
    // while 문으로 증가수열과 감소수열 부분 나눠서 탐색
    while (i + 1 < N && nums[i] < nums[i + 1]) i++; // 증가수열 탐색
    if (i === 0 || i === N - 1) return answer = "NO"; // 처음부터 증가하지 않거나, 계속 증가만 하는 배열 제외
    while (i + 1 < N && nums[i] > nums[i + 1]) i++; // 감소수열 탐색
    if (i !== N - 1) return answer = "NO"; // 감소수열이 끝까지 이어지지 못하고 중간에 끊기는 경우 제외
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 3, 1])); // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])); // NO
console.log(solution([1, 2, 3, 4, 5])); // NO