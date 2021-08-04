// 송아지 찾기 (BFS)
// 이미 찾아간 좌표는 제외하기 위해 체크를 위한 배열을 생성해야 한다.
// 좌표 점이 1부터 1000 까지면 길이 1000 체크 배열 생성
function solution (s, e){
    let answer = 0;

    function BFS () {
        let check = Array.from({length: 10001}, () => 0);
        let queue = [];
        queue.push(s);
        check[s] = 1;
        let L = 0; // 레벨 변수
        
        while(queue.length){
            let len = queue.length;
            // 레벨의 노드 갯수만큼 도는 for문
            for(let i = 0; i < len; i++) {
                // 위의 for문이 한 번 돌면 queue에는 해당 레벨의 노드들은 없어짐. 
                let x = queue.shift(); 
                // 현재 레벨의 다음 레벨 자식 노드들 확인하는 for문
                for (let nextX of [x-1, x+1, x+5]) {
                    if (nextX === e) return L + 1;
                    if (nextX > 0 && nextX <= 10000 && check[nextX] === 0) {
                        check[nextX] = 1;
                        queue.push(nextX);
                    }
                }
            }
            L++;
        }
    }
    answer = BFS();
    return answer;
}
console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5
