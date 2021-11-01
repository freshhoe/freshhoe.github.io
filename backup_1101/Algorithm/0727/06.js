// 2차원 배열 1의 개수
function solution (nums) {
    let answer = nums.map((row, i) => ({i, cnt: row.reduce((a, b) => a + b, 0)}))
    .sort((a, b) => a.cnt - b.cnt)
    .map(ob => ob.i)

    return answer;
}
console.log(solution([[1, 0, 0, 1], [0, 0, 0, 1], 
                      [1, 1, 0, 1], [0, 1, 0, 1]])); // [1, 0, 3, 2]
