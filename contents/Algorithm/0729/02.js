// 매출액의 종류 (naver webtoon 02: two-pointer)
function solution (nums, k) {
    let answer = [];
    let nH = new Map ();
    let lt = 0;
    for (let i = 0; i < k - 1; i++) {
        nH.set(nums[i], nH.get(nums[i]) + 1 || 1);
    }
    for (let rt = k - 1; rt < nums.length; rt++) {
        nH.set(nums[rt], nH.get(nums[rt]) + 1 || 1);
        answer.push(nH.size);
        nH.set(nums[lt], nH.get(nums[lt]) - 1);
        if (nH.get(nums[lt]) === 0) nH.delete(nums[lt]);
        lt++;
    }
    return answer;
}
console.log(solution([20, 12, 20, 10, 23, 17, 10], 4)); //[3, 4, 4, 3]
console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3)); // [3, 2, 2, 2, 2, 1, 1, 2]