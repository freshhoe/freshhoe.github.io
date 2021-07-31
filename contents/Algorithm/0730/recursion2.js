// v: 루트노드 값
// 전위 순회
function DFS (v) {
    if (v > 7) {
        return;
    } else {
        console.log(v);
        DFS(v * 2);
        DFS(v * 2 + 1);
    }
}
DFS(1);
// 중위 순회
function DFS2 (v) {
    if (v > 7) {
        return;
    } else {
        DFS(v * 2);
        console.log(v);
        DFS(v * 2 + 1);
    }
}
DFS2(1);
// 후위 순회
function DFS3 (v) {
    if (v > 7) {
        return;
    } else {
        DFS(v * 2);
        DFS(v * 2 + 1);
        console.log(v);
    }
}
DFS3(1);