// 회장뽑기 (Floyd Warshall 응용)
// 간선 하나의 가중치를 1로 보면 됨.
// 하나의 행이 최대값이 그 사람의 점수
function solution (n, edges) {
    let answer = [];
    let dist = Array.from (Array(n+1), () => Array(n+1).fill(1000));
    let score = Array.from({length: n+1}, () => 0);

    for (let i = 1; i <= n; i++) dist[i][i] = 0;
    for (let [a, b] of edges) {
        dist[a][b] = 1;
        dist[b][a] = 1;
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);       
            }
        }
    }
    let master = 1000;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j) continue;
            score[i] = Math.max(score[i], dist[i][j]);
        }
        master = Math.min (master, score[i]);
    }
    answer.push(master);
    let cnt = 0;
    for (let i = 1; i<= n; i++) {
        if (score[i] === master) cnt++;
    }
    answer.push(cnt);

    return answer;
}
console.log(solution(5, [[1, 2], [2, 3], [3, 4], [4, 5], [2, 4], [5, 3]]));
// [2, 3]