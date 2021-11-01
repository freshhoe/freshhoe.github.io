// 돌다리 건너기
function solution(n) {
    let dy = Array.from({length: n+1}, () => 0);
    dy[0] = 1, dy[1] = 2;

    for (let i = 2; i < dy.length; i++) {
        dy[i] = dy[i-1] + dy[i -2];
    }
    
    return answer = dy[n];
}
console.log(solution(7)); // 34