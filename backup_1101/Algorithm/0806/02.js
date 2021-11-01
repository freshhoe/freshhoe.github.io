// Floyd Warshall
// 냅색의 응용
// 백준 키 순서 문제도 floyd warshall 사용
function solution (n, edges) {
    let answer;
    // dist[i][j] : i 번 정점에서 j 번 정점으로 가는 최소비용
    let dist = Array.from (Array(n+1), () => Array(n+1).fill(1000));
    for (let i = 1; i <= n; i++) dist[i][i] = 0;
    for (let [a, b, c] of edges) {
        dist[a][b] = c;
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    console.log(dist);

    return answer;
}
console.log(solution(5, [[1, 2, 6], 
                         [1, 3, 3], 
                         [3, 2, 2], 
                         [2, 4, 1], 
                         [2, 5, 13], 
                         [3, 4, 5], 
                         [4, 2, 3], 
                         [4, 5, 7]]));
                        //  [[0, 5, 3, 6, 13],
                        //   [M, 0, M, 1, 8],
                        //   [M, 2, 0, 3, 10],
                        //   [M, 3, M, 0, 7],
                        //   [M, M, M, M, 0]]