// 최대 매출 (슬라이딩 윈도우)
function solution (nums, k) {
    let answer = 0, sum = 0, start = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        if (end >= k-1) {
            answer = Math.max(answer, sum);
            sum -= nums[start];
            start++;
        }
    }
    return answer;
}

function solution2 (nums, k) {
    let answer = 0, sum = 0;
    
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    answer = sum;
    for (let i = k; i < nums.length; i++) {
        sum += (nums[i] - nums[i-k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); // 342
console.log(solution2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
console.log(solution2([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
console.log(solution2([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); // 342
