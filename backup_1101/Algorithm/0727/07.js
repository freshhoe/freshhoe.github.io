// 행과열의 최솟값
function solution(nums) {
    let answer = [];
    let N = nums.length;
    
    for (let i = 0; i < N; i++) {
        let min = nums[i][0];
        let pos = 0;
        for (let j = 0; j < N; j++) {
            if (nums[i][j] < min) {
                min = nums[i][j];
                pos = j;
            }
        }
        let row;
        for (row = 0; row < N; row++) { // row 는 N 까지 증가 후 for 문을 빠져나온다.
            if (nums[row][pos] < min) {
                break;
            }
        }
        if (row === N) answer.push(min);
    }
    answer.sort((a, b) => a - b);
    return answer;
}
console.log(solution([
    [4, 6, 22, 1],
    [9, 3, 10, 12],
    [30, 7, 20, 2],
    [15, 8, 5, 13]
])); // [1, 3, 5]