// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// idea: map size가 -1 일 때, 아나그램이다
// 선생님이 수업중 설명한 로직에서는 sH.get(s[rt] === 0)으로 나중에 걸러내면 
// 문제가 있으니 먼저 -1 값을 갖는 key를 delete 해야하는 점 유의바란다고 말씀하셨습니다.
// 로직 수정 캡처본도 있음

function solution (s, t) {
    let answer = 0;
    let sH = new Map ();
    // 기준 문자열 세팅
    for (let x of t) {
        sH.set(x, sH.get(x) - 1 || -1);
    }
    // 기준 문자열 길이의 이전자리까지만 확인해서 기록
    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
        if (sH.get(s[i]) === -1) {
            sH.delete(s[i]);
        } else {
            sH.set(s[i], sH.get(s[i]) + 1 || 1);
        }
    }
    // 기준 문자열 길이부터 확인해서 밀고나감
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        if (sH.get(s[rt]) === -1) {
            sH.delete(s[rt]);
        } else {
            sH.set(s[rt], sH.get(s[rt]) + 1 || 1);
        }
        if (sH.size === 0) answer++;
        if (sH.get(s[lt]) === 1) {
            sH.delete(s[lt]);
        } else {
            sH.set(s[lt], sH.get(s[lt]) - 1 || -1);
            lt++;
        }
    }
    return answer;
}
console.log(solution("bacacbcba", "abc"));
console.log(solution('bacacbcba', 'abc')); //3
console.log(solution('bacaAacba', 'abc')); //3