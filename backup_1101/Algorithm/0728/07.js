// 최소 매출
function solution (nums, k) {
    let answer = [];
    let deque = [];
    // 주어진 k 바로 직전까지 먼저 삽입
    for (let i = 0; i < k - 1; i++) {
        while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
            deque.pop();
        }
        deque.push([nums[i], i]);
    }
    // k - 1 삽입 이후
    for(let i = k - 1; i < nums.length; i++) {
        while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
            deque.pop();
        }
        deque.push([nums[i], i]);
        answer.push(deque[0][0]);
        if (deque[0][1] === i-k+1) deque.shift();
    }
    return answer;
}
console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3));
// [11, 12, 15, 10, 10, 10, 13, 13]
// deque 는 오름차순을 유지
// 시뮬레이션을 통해 로직 이해 필수