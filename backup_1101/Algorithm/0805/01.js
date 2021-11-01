// 계단 오르기
// bottom-up 은 문제를 작은 단위로 나눠 초기화 시킨 후 
// 다음 문제로 차례차례 확장해 나가는 방법이다.
// dy[i] : i 번째 계단까지 오르는 방법의 수
// 초기화가 필요하다. 첫 두 개의 방법은 초기화시켜 할당하고 3번째부터 for문
function solution(n) {
    let dy = Array.from({length: n+1}, () => 0);
    dy[1] = 1, dy[2] = 2;

    for (let i = 3; i < dy.length; i++) {
        dy[i] = dy[i-1] + dy[i -2];
    }
    
    return answer = dy[n];
}
console.log(solution(7)); // 21


