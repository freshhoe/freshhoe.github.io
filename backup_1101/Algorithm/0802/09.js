// 조합의 경우수
// 5C3 = 4C2 + 4C3 은 특정 학생을 기준으로 그 학생을 포함한 것, 포함하지 않은 것의 조합을 구분지어 더한 것.
function solution (n, r) {
    let answer = 0;

    function DFS (n, r) {
        if (n === r || r === 0) {
            return 1;
        } else {
            return DFS(n - 1, r - 1) + DFS(n - 1, r);
        }
    }
    answer = DFS(n, r);
    return answer;
}
console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200

// DP 를 재귀를 이용해 풀 때, 메모이제이션을 활용해 볼 수 있다.
// 조합의 경우수 (메모이제이션)
function solution2 (n, r) {
    let answer = 0;
    let dy = Array.from(Array(35), () => Array(35).fill(0)); // 메모이제이션을 위한 2차원 배열

    function DFS (n, r) {
        if (dy[n][r] > 0) return dy[n][r]; // 0보다 크면 2차원 배열에 값이 있다는 의미이므로 재사용
        if (n === r || r === 0) {
            return 1;
        } else {
            return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r); // n, r이 2차원 배열의 (n,r) 원소가 된다.
        }
    }
    answer = DFS(n, r);
    return answer;
}
console.log(solution2(5, 3)); // 10
console.log(solution2(33, 19)); // 818809200