// 최대 점수 구하기 (DFS)
function solution (nums, m) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    let sum;

    function DFS (L, sum, time) { 
        if (time > m) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + nums[L][0], time + nums[L][1]);
            DFS(L + 1, sum, time);
        }
    }
    DFS(0, 0, 0)
    return answer;
}
console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20)); // 41
console.log(solution([[15, 6], [30, 11], [23, 8], [14, 4], [10, 3], [20, 7]], 25)); // 74