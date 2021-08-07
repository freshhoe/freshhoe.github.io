// 가방문제 (Knapsack 알고리즘)
function solution (nums, m) {
    let answer = 0;
    let n = nums.length;
    // dy[i] : 제한 무게가 i 일 때, 최대가치 
    // 따라서 무게만큼의 길이를 가진 배열 생성
    let dy = Array.from({length: m + 1}, () => 0); // DP table

    for (let i = 0; i < n; i++) {
        for (let j = nums[i][0]; j <= m; j++) {
            dy[j] = Math.max(dy[j], dy[j - nums[i][0]] + nums[i][1]);
        }
    }
    answer = dy[m];
    return answer;
}
console.log(solution([[5, 12], [3, 8], [6, 14], [4, 7]], 11)); // 28 
