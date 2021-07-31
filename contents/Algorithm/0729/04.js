// 연속 부분수열 2 (양수말고 음수도 포함되어 있다!)
// lt, rt 를 사용하지 않아야 하는 반례 문제에 해당. 투 포인터 사용 안함
// 해쉬맵을 만들어야 함.
function solution (nums, m) {
    let answer = 0;
    let sum = 0; // 빼는 게 없는 첫 원소부터 계속 값을 누적해나가는 변수(only 누적합)
    let nH = new Map ();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === m) answer++; // 누적합이 target value 가 되는가
        if (nH.has(sum - m)) answer += nH.get(sum - m);
        nH.set(sum, nH.get(sum) + 1 || 1);
    }

    return answer;
}
console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
console.log(solution([-1, 0, 1], 0)); // 2 
console.log(solution([-1, -1, -1, 1], 0)); // 1

