// 동아리 개수 (DFS)
// DFS 호출이 몇 번 일어났는지로 동아리의 갯수를 파악한다.

function solution (n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array()); // 빈 인접배열(리스트) 초기화
    let check = Array.from({length: n+1}, () => 0); // 사용여부 체크 배열 초기화
    
    for (let [a, b] of edges) {  // 주어진 방향그래프 삽입
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log(graph);

    function DFS (v) {
        for (let nv of graph[v]) {
            if (check[nv] === 0) {
                check[nv] = 1;
                DFS(nv);
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
            answer++;
            check[i] = 1;
            DFS(i);
        }
    }
    return answer;
}
console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]])) // 3