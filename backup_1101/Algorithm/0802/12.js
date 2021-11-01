// 수들의 조합
function solution (nums, m, k) {
    let answer = 0;
    let tmp = [];
    let n = nums.length;

    function DFS (L, s, sum) {
        if (L === m) {
            if (sum % k === 0) answer++;
        } else {
            for (let i = s; i <= n; i++) {
                tmp.push(i);
                DFS(L + 1, i + 1, sum + nums[i]);
                tmp.pop();
            }
        }
    }
    DFS(0, 0, 0);
    return answer;
}
console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2
console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8)); // 5