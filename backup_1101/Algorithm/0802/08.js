// 순열 구하기
function solution (nums, m) {
    let answer = [];
    let tmp = [];
    let n = nums.length;
    let check = Array.from({length: n}, () => 0); // 0으로 초기화한 배열

    function DFS (L) {
        if (L === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = 0; i < n; i++) {
                if (check[i] === 0) { // 0 체크 배열을 활용해 사용여부 체크
                    check[i] = 1; // 사용했으면 1로 변환
                    tmp.push(nums[i]);
                    DFS(L + 1); // 레벨은 단순히 m 레벨에서 멈추게 하기 위한 용도
                    tmp.pop();
                    check[i] = 0;
                }
            }
        } 
    }
    DFS(0);
    return answer;
}
console.log(solution([3, 6, 9], 2));
// [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]