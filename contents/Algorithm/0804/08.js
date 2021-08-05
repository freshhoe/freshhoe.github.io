// 제품 이동
// 리뷰 필요
// DFS로 풀 수도 있지만...
// 간선 가중치의 최대값 안에는 답이 있다는 것은 확실하다. 이분 검색 도입.
// lt = 1 로 초기화. rt = 가중치 최대값 으로 초기화.
// mid 값이 내가 트럭에 싣는 무게 값
// 이 무게로 1 -> 5 로 갈 수 있으면 답이 될 수 있고 아니면 안됨.
// 경로는 BFS 로 탐색. 도착지점이 체크되어 있으면 가능한 것.

function solution (N, edges, s, e) {
    let answer;
    let n = edges.length;
    let graph = Array.from(Array(n + 1), () => Array());
    let lt = 1;
    let rt = 0;

    for (let [a, b, c] of edges) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
        rt = Math.max(rt, c);
    }
    
    function BFS(w) {
        let check = Array.from({length: n + 1}, () => 0);
        let queue = [];
        check[s] = 1;
        queue.push(s);

        while (queue.length) {
            let curr = queue.shift();
            for (let [b, c] of graph[curr]) {
                if (c >= w && check[b] == 0) {
                    check[b] = 1;
                    queue.push(b);
                }
            }
        }
        return check[e]; // 도착지점이 1이면 방문한 것.
    }

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (BFS(mid)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}
console.log(solution(5, [[1, 2, 5], [1, 3, 3], [1, 4, 2], 
                         [2, 4, 2], [3, 4, 4], [4, 5, 3]], 1, 5)); // 3
