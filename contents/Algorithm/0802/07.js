// 중복순열 구하기 (n 의 갯수에 따라 상태 트리 가지 갯수도 달라짐)
// 입력 예제는 3개의 구슬이므로 상태트리도 3개씩 뻗어나간다.
// 반복문으로 짠다면 트리 레벨이 증가할수록 for 반복문을 증가시켜야 함.
// 재귀는 어떤 레벨에서 멈출건지 정해주면 좀 더 유연한 사용이 가능함.
function solution (n, m) {
    let answer = [];
    let tmp = [];

    function DFS (L) {
        if (L === m) { // 
            answer.push(tmp.slice());
        } else {
            for (let i = 1; i <= n; i++) {
                tmp.push(i);
                DFS(L + 1); // 레벨은 단순히 m 레벨에서 멈추게 하기 위한 용도
                tmp.pop();
            }
        } 
    }
    DFS(0);
    return answer;
}
console.log(solution(3, 2));
// [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]

// 중복 순열에 체크 조건을 줘서 이미 추가한 것은 중복되지 않게하면 순열이 됨.
function solution2 (n, m) {
    let answer = [];
    let tmp = [];
    let check = Array.from({length: n+1}, () => 0); // 0으로 초기화한 배열

    function DFS (L) {
        if (L === m) { // 
            answer.push(tmp.slice());
        } else {
            for (let i = 1; i <= n; i++) {
                if (check[i] === 0) { // 0 체크 배열을 활용해 사용여부 체크
                    check[i] = 1; // 조건문을 만족했으면 사용하게 되므로 다시 1로 변환
                    tmp.push(i);
                    DFS(L + 1); // 레벨은 단순히 m 레벨에서 멈추게 하기 위한 용도
                    tmp.pop();
                    check[i] = 0; // 제거된 후에는 다시 사용여부 0으로 변환
                }
            }
        } 
    }
    DFS(0);
    return answer;
}
console.log(solution2(3, 2));