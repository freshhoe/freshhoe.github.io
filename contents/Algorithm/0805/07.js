// 최대점수 구하기 (Knapsack 알고리즘)
// 풀 수 있는 문제의 갯수가 1로 고정되어 있다. 
// (cf. 개로 고정되어 있는 문제는 조금 다르게 적용해야 한다.)
// 이전 문제와 달리 중복이 허용되지 않는다.
// DP table 의 끝에서부터 시작한다.
function solution (nums, m) {
    let answer = 0;
    let n = nums.length;
    // dy[i] : i 분을 사용해 얻을 수 있는 최대점수
    let dy = Array.from({length: m + 1}, () => 0);

    for (let i = 0; i < n; i++) {
        let ps = nums[i][0];
        let pt = nums[i][1];
        for (let j = m; j >= pt; j--) {
            dy[j] = Math.max(dy[j], dy[j - pt] + ps);
        }
    }
    answer = dy[m];
    return answer;
}
console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20)) // 41