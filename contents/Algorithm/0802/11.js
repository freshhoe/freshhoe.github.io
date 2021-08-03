// 조합 구하기
// 여기서 조합 코드는 원리를 이해했다면 외우는 게 좋다.
// 조합 스타일의 코딩을 하는 일이 많을 수 있음.
function solution (n, m) {
    let answer = [];
    let tmp = [];

    function DFS (L, s) {
        if (L === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = s; i <= n; i++) {
                tmp.push(i);
                DFS(L + 1, i + 1);
                tmp.pop();
            }
        }
    }
    DFS(0, 1);
    return answer;
}
console.log(solution(4, 2))
// [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

// 앞에서 포함한다, 안한다의 방식이 아니라도 중복을 허용하지 않는 경우
// 조합 코드로 부분 집합을 구할 수 있다.
function solution2 (n) {
    let answer = [];
    let tmp = [];

    function DFS (L, s) {
        let res = "";
        for (let x of tmp) {
            res += x;
        }
        console.log(res);

        for (let i = s; i <= n; i++) {
            tmp.push(i);
            DFS(L + 1, i + 1);
            tmp.pop();
        }
    }
    DFS(0, 1);
    return answer;
}
console.log(solution2(4, 2))