// 경로 탐색 (인접행렬)
// 그래프의 경로 탐색은 한 번 방문한 정점은 방문하면 안된다는 것을 기본 가정으로 한다.
function solution (n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0)); // 인접행렬 초기화
    let check = Array.from({length: n+1}, () => 0); // 사용여부 체크 배열 초기화
    
    for (let [a, b] of edges) {  // 주어진 방향그래프 삽입
        graph[a][b] = 1;
    }
    console.log(graph);
    let path = [];

    function DFS (v) {
        if (v === n) { // v 가 종착지점에 도착
            answer++;
            console.log(path);
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && check[i] === 0) {
                    check[i] = 1;
                    path.push(i);
                    DFS(i);
                    check[i] = 0; // 하나의 뎁스를 모두 탐색하고 나왔다면 해당 노드는 사용여부 해제
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