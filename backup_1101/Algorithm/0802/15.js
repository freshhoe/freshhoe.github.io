// 미로의 최단 거리 통로 (BFS)
// queue 에는 좌표값이 들어간다.
// 특정 좌표의 상하좌우에 0 값이 있으면 queue에 삽입 된다.
function solution (board){
    let answer = 0;
    let N = board.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let dist = Array.from(Array(N), () => Array(N).fill(0));

    function BFS (x, y) {
        let queue = [];
        queue.push([x, y]);
        board[x][y] = 1;
        while (queue.length) {
            let curr = queue.shift();
            for (let j = 0; j < 4; j ++) {
                let nx = curr[0] + dx[j];
                let ny = curr[1] + dy[j];
                if (nx >= 0 && nx < N && 
                    ny >= 0 && ny < N && 
                    board[nx][ny] == 0) {
                        board[nx][ny] = 1;
                        dist[nx][ny] = dist[curr[0]][curr[1]] + 1;
                        queue.push([nx, ny]);
                    }
            }
        }
    }
    BFS(0, 0);
    console.log(dist);
    if (dist[N - 1][N - 1] === 0) {
        return -1;
    } else {
        answer = dist[N - 1][N - 1];
    }
    return answer;
}
console.log(solution([[0, 0, 0, 0, 0, 0, 0], 
                      [0, 1, 1, 1, 1, 1, 0], 
                      [0, 0, 0, 1, 0, 0, 0], 
                      [1, 1, 0, 1, 0, 1, 1],
                      [1, 1, 0, 1, 0, 0, 0], 
                      [1, 0, 0, 0, 1, 0, 0], 
                      [1, 0, 1, 0, 0, 0, 0]])); // 12
