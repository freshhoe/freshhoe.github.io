// 이진 트리 레벨 탐색
function solution (){
    let answer = "";

    function BFS () {
        let queue = [];
        queue.push(1);
        while(queue.length){
            let v = queue.shift();
            answer += v + " ";
            for(let nv of [v*2, v*2+1]){
                if(nv > 7) continue;
                queue.push(nv);
            }
        }
    }
    BFS();
    return answer;
}
console.log(solution());

// 노드에서 방문 하면 큐에서 나온다.
// 한 번만에 갈 수 있는 것이 해당 노드에서 직접적으로 연결되어 있는 노드들. (즉, 다음 레벨의 노드들)
// 레벨 탐색에서 BFS를 사용하는 이유는 최단 거리를 찾기 위함.