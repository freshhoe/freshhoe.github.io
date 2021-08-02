// 재귀함수를 이용한 이진수 출력
function solution (n) {
    if (n === 1 || n === 0) return String(n);
    return solution(parseInt(n/2)) + String(n % 2);
}
console.log(solution(11)); // 1011

function solution2 (n) {
    let answer = 0; 
    let tmp = [];
    
    function DFS (n) {
        if (n === 0) {
            return;
        } else {
            DFS(parseInt(n / 2));
            tmp.push(n % 2);
        }
    }
    DFS(n);
    // 배열 1, 2, 3 을 123 의 숫자로 만드는 것 (데일리 퀴즈 활용 필요)
    for (let i = 0; i < tmp.length; i++) { 
        answer = answer * 10 + tmp[i];
    }
    return answer;
}
console.log(solution2(11)); // 1011