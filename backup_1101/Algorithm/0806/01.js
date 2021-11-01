// 동전 바꿔주기 (냅색 알고리즘)
// 무한개만 왼쪽에서 누적. 유한개는 끝에서부터.
// 동전 종류는 정하는 반복문
// 동전의 사용 가능한 갯수가 가장 안쪽 반복문
// 동전 단위 * 갯수(증가) 반복해서 계산
function solution (t, coins) {
    let answer;
    let dy = Array.from ({length: t+1}, () => 0);
    dy[0] = 1; // dp[0] = 1로 초기화

    for (let [price, n] of coins) {
        for (let j = t; j >= 1; j--) {
            for (let k = 1; k <= n; k++) {
                if (j - (price * k) < 0) break; // indexOutOfRange
                dy[j] += dy[j - (price * k)];
            }
        }
    }
    answer = dy[t];
    return answer;
}
console.log(solution(20, [[5, 3], [10, 2], [1, 5]])); // 4