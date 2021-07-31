// 가장 긴 수열
// function solution (nums) {
//     let answer;
//     return answer;
// }
// console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2])); // 5
// console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11])); // 4
// console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7])); // 5

let nums = [5, 3, 6, 7, 9, 8, 5, 3, 1, 2];
let answer;
let up = down = 1;
let maxup = maxdown = 0;

for (i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
        up++;
    } else {
        maxup = Math.max(maxup, up);
        up = 1;
    }
    if (nums[i - 1] > nums[i]) {
        down++;
    } else {
        maxdown = Math.max(maxdown, down);
        down = 1;
    }
}
maxup = Math.max(maxup, up);
maxdown = Math.max(maxdown, down);
answer = Math.max(maxup, maxdown);
console.log(answer);