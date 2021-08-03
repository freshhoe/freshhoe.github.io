// 수열 추측하기
// n = 4 이면 1,2,3,4 로 이루어진 순열 중에 답이 있게 된다.
function solution (n, f) {
    let answer = 0;
    let flag = false;
    let dy = Array.from(Array(11), () => Array(11).fill(0)); // 메모이제이션을 위한 2차원 배열
    let check = Array.from({length: n + 1}, () => 0);
    let p = [], b = [];

    function combination (n, r) {
        if (dy[n][r] > 0) return dy[n][r]; // 0보다 크면 2차원 배열에 값이 있다는 의미이므로 재사용
        if (n === r || r === 0) {
            return 1;
        } else {
            return dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r); // n, r이 2차원 배열의 (n,r) 원소가 된다.
        }
    }

    function DFS (L, sum) {
        if (flag) return;
        if (L === n) {
            if (sum === f) {
                answer = p.slice();
                flag = true;
            }
        } else {
            for (let i = 1; i <= n; i++) {
                if (check[i] === 0) {
                    check[i] = 1;
                    p.push(i);
                    DFS(L + 1, sum + (i * b[L]));
                    check[i] = 0;
                    p.pop();
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        b.push(combination(n - 1, i));
    }
    DFS(0, 0)
    return answer;
}
console.log(solution(4, 16)) // [3, 1, 2, 4]
console.log(solution(5, 50)) // [1, 2, 4, 3, 5]

function solution2 (n, f) {
    let answer = 0;
    let flag = false;
    let check = Array.from({length: n + 1}, () => 0);
    let p = [], b = [];

    function DFS (L, sum) {
        if (flag) return;
        if (L === n) {
            if (sum === f) {
                answer = p.slice();
                flag = true;
            }
        } else {
            for (let i = 1; i <= n; i++) {
                if (check[i] === 0) {
                    check[i] = 1;
                    p.push(i);
                    DFS(L + 1, sum + (p[p.length-1] * b[L]));
                    check[i] = 0;
                    p.pop();
                }
            }
        }
    }
    b.push(1);
    for (let i = 1; i < n; i++) {
        b.push((b[i - 1] * (n - i))/i);
    }
    DFS(0, 0)
    return answer;
}
console.log(solution2(4, 16)) // [3, 1, 2, 4]
console.log(solution2(5, 50)) // [1, 2, 4, 3, 5]

