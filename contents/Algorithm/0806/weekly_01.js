//
function solution (s) {
    let answer = '';
    let N = s[0].length;
    let sh = new Map ();
    let i;

    for (i = 0; i < N; i++) {
        let char = '';
        for (let j = 0; j < s.length; j++) {
            char = s[j].substring(0, i+1);
            sh.set(char, sh.get(char) + 1 || 1);

        }
        if (sh.get(char) !== s.length) break;
    }
    answer = s[0].slice(0, i);
    return answer;
}
console.log(solution(["longt", "longtime", "longest"])); // long