// 섬나라 아일랜드
// 1로 연결된 덩어리들의 갯수를 찾는 것
// 8방향 탐색 (대각선도 하나의 덩어리에 포함)
// 1이었던 것을 방문했으면 0으로 변환
// 플러드 필(flood fill)

function solution (board) {
    let answer = 0;
    let N = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
    function DFS (x, y) {
        for (let k = 0; k < N + 1; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < N && 
                ny >= 0 && ny < N && 
                board[nx][ny] === 1) {
                board[nx][ny] = 0;
                DFS(nx, ny);
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 0;
                answer++;
                DFS(i, j);
            }
        }

    }
    return answer;
}
console.log(solution([[1, 1, 0, 0, 0, 1, 0], 
                      [0, 1, 1, 0, 1, 1, 0], 
                      [0, 1, 0, 0, 0, 0, 0], 
                      [0, 0, 0, 1, 0, 1, 1],
                      [1, 1, 0, 1, 1, 0, 0], 
                      [1, 0, 0, 0, 1, 0, 0], 
                      [1, 0, 1, 0, 1, 0, 0]])) // 5