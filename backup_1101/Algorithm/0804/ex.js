function solution(nums, n) {
    let answer;
    let lt = 1;
    let rt = Math.max(...nums);

    function count(nums, len) {
        let cnt = 0;
        for (let x of nums) {
            cnt += Math.floor(x / len);
        }
        return cnt;
    }

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(nums, mid) >= n) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}

console.log(solution([802, 743, 457, 539], 11)); // 200