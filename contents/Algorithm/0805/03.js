// 최대 부분 증가수열
// 응용문제로 많이 출제됨
function solution (nums) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    // dy[i] : 배열의 i + 1 번째 원소가 증가수열의 마지막 항이 되는 
    // 최대 부분 증가수열의 길이
    let dy = Array.from({length: n}, () => 0);
    dy[0] = 1;
    
    // 이전에 해결한 문제를 다음 문제 해결에 사용한다는 원리를 생각해보면
    // 이전에 해결한 문제 중 가장 큰 값(DP값)을 다음 문제 해결에 사용해야 한다.
    for (let i = 1; i < n; i++) {
        // 현재 조회되고 있는 배열의 수 이전 수들의 dy 값 중 최대값이 갱신되는 변수
        // 즉, 길이의 최대값 갱신 변수
        let max = 0;
        // max 값 갱신을 위해 현재 조회한 수 이전의 수들을 확인하는 반복문
        for (let j = i - 1; j >= 0; j--) {
            // max 값 갱신 조건은 현재 조회되고 있는 배열의 수 이전 수들의 값 자체도 작아야 하고
            // 길이를 의미하는 dy 값이 max 값보다 커야 한다.
            if (nums[i] > nums[j] && dy[j] > max) {
                   max = dy[j];
            }
        }
        // 반복문을 돌고 나오면 갱신된 max 값에 +1을 해줘서 길이값을 할당
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4

// 길이에 더해 답이 되는 수열도 반환하려면?
function solution2 (nums) {
    let answer = Number.MIN_SAFE_INTEGER;
    let pos = 0;
    let n = nums.length;
    let dy = Array.from({length: n}, () => 0);
    let pa = Array.from ({length: n}, () => -1);
    dy[0] = 1;
    
    for (let i = 1; i < n; i++) {
        let max = 0;
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] > nums[j] && dy[j] > max) {
                max = dy[j];
                pa[i] = j; 
            }
        }
        dy[i] = max + 1;
        if (dy[i] > answer) {
            answer = dy[i];
            pos = i;
        }
    }

    let path = [];
    function DFS(idx) {
        if (idx === -1) {
            return;
        } else {
            DFS(pa[idx]);
            path.push(nums[idx]);
        }
    }

    DFS(pos);
    return [answer, path];
}
console.log(solution2([5, 3, 7, 8, 6, 2, 9, 4])); // 4