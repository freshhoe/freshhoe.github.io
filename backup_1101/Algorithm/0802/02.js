// 이진트리 순회 (DFS)
// 전위 순회
function solution1 (n) {
    let answer = '';
    function DFS (v) {
        if (v > 7)  {
            return;
        } else {
            answer += (v + ' ');
            DFS(v * 2); // 왼쪽 노드
            DFS(v * 2 + 1); // 오른쪽 노드
        }
    }
    DFS(n);
    return answer;
}
console.log(solution1(1));

// 중위 순회
function solution2 (n) {
    let answer = '';
    function DFS (v) {
        if (v > 7)  {
            return;
        } else {
            DFS(v * 2); // 왼쪽 노드
            answer += (v + ' ');
            DFS(v * 2 + 1); // 오른쪽 노드
        }
    }
    DFS(n);
    return answer;
}
console.log(solution2(1));

// 후위 순회
function solution3 (n) {
    let answer = '';
    function DFS (v) {
        if (v > 7)  {
            return;
        } else {
            DFS(v * 2); // 왼쪽 노드
            DFS(v * 2 + 1); // 오른쪽 노드
            answer += (v + ' ');
        }
    }
    DFS(n);
    return answer;
}
console.log(solution3(1));