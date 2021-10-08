function solution(nums, k) {
  let answer = 0;
  let n = nums.length;
  let tmp = 0;
  let lt = 0;

  for (let rt = 0; rt < n; rt++) {
    if (nums[rt] % 2 !== 0) tmp++;
    if (nums) if (nums[rt] % 2 === 0) rt--;
    if (tmp === k) answer++;

    while (tmp > k) {
      if (nums[lt] % 2 !== 0) tmp--;
      lt++;
      if (tmp === k) answer++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 1, 2], 2)); // 5
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); //16
console.log(solution([2, 4, 6], 1)); //0
