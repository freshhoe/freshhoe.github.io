function solution (nums, m) {
    let answer = 0;
    let mul = 1;
    let lt = 0;

    for (let rt = 0; rt < nums.length; rt++) {
        mul *= nums[rt];
        while (mul > m) {
            mul /= nums[lt++];
        }
        answer += (rt - lt + 1);
    }
    return answer;
}
console.log(solution([1, 2, 3], 1)); // 1
console.log(solution([2, 3, 3, 2, 5], 20)); // 11
console.log(solution([1, 1, 1, 1], 3)); // 10