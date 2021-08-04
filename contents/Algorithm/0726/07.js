// 아나그램
function solution(s1, s2) {
    let answer = 'YES';
    let len = s1.length;
    let sh = new Map();
    if (s1.length !== s2.length) answer = 'NO';

    for (i = 0; i < len; i++) {
        sh.set(s1[i], s1.get(s1[i]) + 1 || 1);
    }

    for (let char of s2) {
        // 키가 매치되지 않거나 그 키의 값이 0이면 두 문자열은 같지 않은 것.
        if (!sh.has(char) || sh.get(char) === 0) return (answer = 'NO');
        sh.set(char, sh.get(char) - 1);
    }
    return answer;
}
console.log(solution('AbaAeCe', 'baeeACA')); // YES
console.log(solution('abaCC', 'Caaab')); // NO