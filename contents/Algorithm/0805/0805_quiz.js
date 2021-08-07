// function solution (nums) {
//     let answer = 0;
//     let answer2 = 0;
//     let n = nums.length;
//     let dy = Array.from({length: n}, () => 0);
//     let dy2 = Array.from({length: n}, () => 0);
//     dy[0] = 1;
//     dy2[0] = 1;
    
//     for (let i = 0; i < n; i++) {
//         let max = 0;
//         for (let j = i-1; j >= 0; j--) {
//             if (nums[i] > nums[j] && dy[j] > max) {
//                 max = dy[j];
//             } 
//         }
//         dy[i] = max + 1;
//         answer = Math.max(answer, dy[i]);
//     }

//     for (let i = 0; i < n; i++) {
//         let min = 0;
//         for (let j = i-1; j >= 0; j--) {
//             if (nums[i] < nums[j] && dy2[j] > min) {
//                 min = dy2[j];
//             } 
//         }
//         dy2[i] = min + 1;
//         answer2 = Math.max(answer2, dy2[i]);
//     }
//     answer += dy2.indexOf(answer2) - dy.indexOf(answer);
//     return answer;
// }
// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 7

function solution (nums) {
    let answer = 0;
    let answer2 = 0;
    let n = nums.length;
    let dy = Array.from({length: n}, () => 0);
    let dy2 = Array.from({length: n}, () => 0);
    dy[0] = 1;
    dy2[0] = 1;
    
    for (let i = 0; i < n; i++) {
        let max = 0;
        let min = 0;
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] > nums[j] && dy[j] > max) {
                max = dy[j];
            } else if (nums[i] < nums[j] && dy2[j] > min) {
                min = dy2[j];
            }
        }
        dy[i] = max + 1;
        dy2[i] = min + 1;
        answer = Math.max(answer, dy[i]);
        answer2 = Math.max(answer2, dy2[i]);
    }
    answer += dy2.indexOf(answer2) - dy.indexOf(answer);
    let rNums = nums.reverse();
    for (let i = 0; i < n; i++) {
        let max = 0;
        let min = 0;
        for (let j = i-1; j >= 0; j--) {
            if (rNums[i] > rNums[j] && dy[j] > max) {
                max = dy[j];
            } else if (rNums[i] < rNums[j] && dy2[j] > min) {
                min = dy2[j];
            }
        }
        dy[i] = max + 1;
        dy2[i] = min + 1;
        answer = Math.max(answer, dy[i]);
        answer2 = Math.max(answer2, dy2[i]);
    }
    
    return answer;
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 7

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); //7
console.log(solution([1, 2, 3, 4, 5, 6, 7])); //7
console.log(solution([5, 4, 3, 2, 1])); //5
console.log(solution([2, 3, 5, 7, 3, 6, 5, 3])); //7
console.log(solution([5, 6, 3, 5, 6, 3, 3, 4, 2, 1, 5])); //6
console.log(solution([1, 2, 3, 4, 5, 5, 5, 5])); //5
console.log(solution([10, 30, 10, 20, 50, 30, 10])); //5
console.log(solution([5, 6, 3, 5, 2, 5, 6, 2, 7])); //4
console.log(solution([5, 3, 4, 5, 6, 9])); //5
console.log(solution([2, 3, 2, 3, 2, 3, 2, 3, 2, 3])); //3