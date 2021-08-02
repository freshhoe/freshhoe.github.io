// 합이 같은 부분집합 (매개변수를 잘 활용해야 함)
function solution (nums) {
    let answer = "NO";
    let flag = false; // 답을 찾았으면 재귀 멈춤;
    let total = nums.reduce((a, b) => a + b, 0); // 이 total에서 부분집합의 합을 빼서 절반이 되면 우리가 찾는 것
    let n = nums.length;

    function DFS (L, sum) {
        if (flag) return; // 원하는 것을 찾았다면 스택에 쌓여 있는 것을 모두 return 만 하면서 스택을 비운다.
        if (L === n) {
            if ((total - sum) === sum) {
                answer = "YES";
                flag = true;
            }
        } else {
            DFS(L + 1, sum + nums[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
console.log(solution([1, 3, 5, 6, 7, 10])); // 'YES'
console.log(solution([5, 2, 6, 9, 10, 12])); // 'YES'
console.log(solution([3, 9, 11, 13])); // 'NO'