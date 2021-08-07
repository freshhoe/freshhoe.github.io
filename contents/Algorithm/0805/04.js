// 효율적인 공부
// 앞의 문제의 응용
function solution (times, r) {
    let answer = 0;
    times.sort((a, b) => a[1] - b[1]);
    let n = times.length;
    let dy = Array.from({length: n}, () => 0);

    for (let i = 0; i < n; i++) {
        dy[i] = times[i][2];
        for (let j = i - 1; j >= 0; j--) {
            // 앞 구간 끝나는 시간 + 휴식시간 보다 큰 것을 다음 구간으로
            if (times[j][1] + r <= times[i][0] &&
                dy[j] + times[i][2] > dy[i]) {
                dy[i] = dy[j] + times[i][2];
            }
        }
        answer = Math.max(answer, dy[i]);
    }

    return answer;
}
console.log(solution([[3, 5, 20], [4, 7, 16], [1, 2, 5], 
                      [11, 13, 7], [9, 10, 6]], 2)); // 28