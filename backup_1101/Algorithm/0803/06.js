// 토마토 (BFS)
// 익은 토마토에서 BFS 로 퍼져나가는 것. (flood fill)
// queue 에 익은 토마토의 좌표값이 먼저 들어가 초기화. 이후에 BFS 시작.
// 좌표에 표시되는 거리값이 익는데 걸리는 일 수.
// 좌표에 거리값을 누적하지 않을 경우, 방문한 곳은 다시 방문하지 않도록 변환 처리 필요.
// -1로 막혀서 BFS가 접근하지 못할 경우, 접근하지 못한 곳이 어떤 상태인지를 알 수 있도록 2중 for문 활용해서 값 확인.

function solution (board) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = board.length; // 행 길이
    let m = board[0].length; // 열 길이
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let dist = Array.from(Array(n), () => Array(m).fill(0));
    let queue = [];
    
    function BFS () {
        while (queue.length) {
            let cur = queue.shift();
            for (let j = 0; j < 4; j++) {
                let nx = cur[0] + dx[j];
                let ny = cur[1] + dy[j];
                if (nx >= 0 && nx < n && 
                    ny >= 0 && ny < m && 
                    board[nx][ny] === 0) {
                    board[nx][ny] = 1;
                    dist[nx][ny] = dist[cur[0]][cur[1]] + 1;
                    queue.push([nx, ny]);
                    answer = dist[nx][ny];
                }
            }
        }
    }
    // 익은 토마토의 좌표값 queue에 할당
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }
    BFS();
    // 다 익지 못했을 경우 -1 반환
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 0) return -1;
        }
    }
    return answer;
}
console.log(solution([[0, 0, -1, 0, 0, 0], 
                      [0, 0, 1, 0, -1, 0], 
                      [0, 0, -1, 0, 0, 0], 
                      [0, 0, 0, 0, -1, 1]])) // 4