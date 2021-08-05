// 2차원 배열 이분검색
// row 는 0, col 은 n-1 로 초기화
// target 보다 크면 col 을 줄이고, 작으면 row를 늘림

function solution (matrix, target) {
    let answer;
    let n = matrix[0].length;
    let row = 0;
    let col = n - 1;

    while (row < matrix.length && col >= 0) {
        if (target === matrix[row][col]) {
            answer = [row, col];
            break;
        } else if (target < matrix[row][col]) {
            col--;
        } else {
            row++;
        }
    }
    return answer;
}
console.log(solution([[1, 6, 9, 12], [3, 7, 10, 14], 
                      [5, 8, 13, 17], [15, 18, 20, 23]], 8)); // [2, 1]