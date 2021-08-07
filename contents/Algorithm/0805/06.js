// 동전교환 (Knapsack 알고리즘)
function solution (nums, m) {
    let answer;
    let n = nums.length;
    // dy[i] : i 원을 거슬러 줄 때 최소 동전 개수
    let dy = Array.from ({length: m+1}, () => Number.MAX_SAFE_INTEGER);
    dy[0] = 0;

    for(let i = 0; i < n; i++) {
        for (let j = nums[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j], dy[j - nums[i]] + 1);
        }
    }
    answer = dy[m];
    return answer;
}
console.log(solution([1, 2, 5], 15));  // 3
