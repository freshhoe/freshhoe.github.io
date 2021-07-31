// 수열 축소
// function solution (nums, m) {
//     let answer = [];
    
//     for (i = 1; i < m + 1; i++) {
//         let temp = [];
//         for (j = 0; j < nums.length - 1; j++) {
//             temp.push(nums[j + 1] - nums[j]);
//         }
//         nums = temp;
//     }
//     return answer = nums;
// }
// console.log(solution([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
// console.log(solution([5, 3, 7, 9, -2], 2)); // [6, -2, -13]

// function solution2 (nums, m) {

//     for (i = 1; i < m + 1; i++) {
//         for (j = 0; j < nums.length - 1; j++) {
//             nums[j] = nums[j + 1] - nums[j]
//         }
//     }
//     nums = nums.slice(0, nums.length - m);
//     return answer = nums;
// }
// console.log(solution2([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
// console.log(solution2([5, 3, 7, 9, -2], 2)); // [6, -2, -13]

function solution2 (nums, m) {

    for (i = 1; i < m + 1; i++) {
        for (j = 0; j < nums.length - 1; j++) {
            nums[j] = nums[j + 1] - nums[j]
        }
    }
    nums = nums.slice(0, nums.length - m);
    return answer = nums;
    // nums.splice(nums.length - m, m);
    // return answer = nums;
}
console.log(solution2([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
console.log(solution2([5, 3, 7, 9, -2], 2)); // [6, -2, -13]