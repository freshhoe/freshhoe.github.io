// 경로 탐색 (인접리스트)
// 보통은 인접리스트 활용. 메모리 절약을 위해

function solution (n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array()); // 빈 인접배열(리스트) 초기화
    let check = Array.from({length: n+1}, () => 0); // 사용여부 체크 배열 초기화
    
    for (let [a, b] of edges) {  // 주어진 방향그래프 삽입
        graph[a].push(b);
    }
    console.log(graph);
    
    let path = [];
    function DFS (v) {
        if (v === n) { // v 가 종착지점에 도착
            answer++;
            console.log(path);
        } else {
            for (let nv of (graph[v])) { // v 정점에서 갈 수 있는 값들이 있고 그것을 하나씩 조회
                if(check[nv] === 0) {
                    check[nv] = 1;
                    path.push(nv);
                    DFS(nv);
                    check[nv] = 0;
                    path.pop();
                }
            }
        }
    }
    check[1] = 1;
    path.push(1);
    DFS(1);
    return answer;
}
console.log(solution(5, [[1, 2], [1, 3], [1, 4], [2, 1], 
                         [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]] )) // 6