// 최대 선호 음식 (DFS)
// 비트 연산 활용 (부분집합의 개념)
// 재료에 가중치를 준다. 재료가 4개라면 1 ~ 4 의 재료에 각각 (1, 2, 4, 8) 가중치를 부여한다.
// 보유 또는 선호 재료와 매칭되는 가중치의 합이 보유 또는 선호 여부를 1 또는 0으로 나타낸 이진수를 십진수로 표현한 값이다. 
// 학생이 선호하는 재료의 가중치 합과 선생님이 보유한 재료의 가중치 합을 
// 비트연산해서 학생이 선호하는 재료의 가중치 합이 도출된다면, 학생이 선호하는 재료의 종류는 선생님이 보유한 재료의 종류의 부분집합이므로
// 선생님이 보유한 재료로 해당 학생에게 음식을 먹일 수 있게 된다.

function solution (nums, d, k) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    let pow = Array.from({length: d + 1}, () => 0);
    let st = Array.from({length: n}, () => 0);
    pow[1] = 1;
    
    // i 인덱스가 양념 번호. pow 는 각 양념에 대한 가중치 배열 
    for (let i = 2; i <= d; i++) {
        pow[i] = pow[i - 1] * 2;
    }

    // nums에서 i 번째 학생이 선호하는 양념들의 가중치 합
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            st[i] += pow[nums[i][j]]; // i 번 학생의 j 번째 양념 가중치
        }
    }
    // bit 는 선생님이 가진 양념의 가중치 합 
    // 어떤 양념을 가지고 있냐에 따라 값이 달라짐. 
    // DFS 로 최대 인원을 먹일 수 있는 재료의 조합을 찾아내는 것. 
    function DFS (L, s, bit) {
        if (L === k) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                // 학생 선호 양념과 선생님이 가진 양념 비트연산(&)
                let tmp = bit & st[j];
                if ((bit & st[j]) === st[j]) cnt++;
            }
            answer = Math.max(answer, cnt);
        } else {
            // i 인덱스는 양념 번호
            for (let i = s; i <= d; i++) {
                DFS(L + 1, i + 1, bit + pow[i]);
            }
        }
    }
    DFS(0, 1, 0)
    return answer;
}
console.log(solution([[1], [2, 3], [3], [1, 2], [], 
                      [2, 1], [2, 3, 4], [3, 4]], 4, 3)) // 6