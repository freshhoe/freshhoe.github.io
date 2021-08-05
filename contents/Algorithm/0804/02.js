// 원더랜드 (최소스패닝트리 : 크루스칼, Union&Find 활용)
// 리뷰 필요
// 간선 가중치가 최소인것부터 선택. 선택한 것의 정점은 하나의 Union으로.
// 트리가 회로가 되어서는 안된다.
// 종료조건은 간선 갯수만큼 다 돌면 끝내면 된다.
function solution (n, edges) {
    let answer = 0;
    let unf = Array.from({length: n + 1}, (v, i) => i);

    function Find (v) {
        if (v === unf[v]) {
            return v;
        } else {
            return unf[v] = Find(unf[v]);
        }
    }

    function Union (a, b) {
        let fa = Find(a);
        let fb = Find(b);
        if (fa != fb) unf[fa] = fb;
    }

    edges.sort((a, b) => a[2] - b[2]);
    for (let [a, b, c] of edges) {
        let fa = Find(a);
        let fb = Find(b);
        if (fa != fb) {
            answer += c;
            unf[fa] = fb;
        }
    }

    return answer;
}
console.log(solution(9, [[1, 2, 12], [1, 9, 25], [2, 3, 10], 
                         [2, 8, 17], [2, 9, 8], [3, 4, 18], 
                         [3, 7, 55], [4, 5, 44], [5, 6, 60], 
                         [5, 7, 38], [7, 8, 35], [8, 9, 15]])); // 196
