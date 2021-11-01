// 학급회장
function solution (s) {
    let answer;
    let sh = new Map ();
    let max = Number.MIN_SAFE_INTEGER;

    for (let char of s) {
        sh.set(char, sh.get(char) + 1 || 1);
    }
    
    for (let [key, val] of sh) {
        if (max > val) {
            max = val;
            answer = key;
        }
    }
    return answer;
}
console.log(solution('BACBACCACCBDEDE')); // C