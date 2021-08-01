// 부분집합 구하기 (DFS)
function solution(n){
    let answer=[];
    let part=[];
    function DFS(L){
        if(L===n+1){
            if(part.length!==0) answer.push(part.slice());
        }
        else{
            part.push(L);
            DFS(L+1);
            part.pop();
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));