// 부분집합 구하기 (DFS)
function solution(n) {
    let answer = [];
    let part = [];
    function DFS(L) {
        if (L === n+1) {
            if (part.length !== 0) answer.push(part.slice()); // 공집합이 아닌것만 push
        }
        else{
            part.push(L);
            DFS(L + 1); // 상태 트리의 왼쪽 (부분 집합으로 포함시키겠다)
            part.pop();
            DFS(L + 1); // 상태 트리의 오른쪽 (부분 집합으로 포함시키지 않겠다)
        }
    }
    DFS(1);
    return answer;
}
console.log(solution(3));