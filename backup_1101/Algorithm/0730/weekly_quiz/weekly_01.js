function solution(s) {
    let answer = '';
    let sH = new Map ();
    for (let x of s) {
        sH.set(x, sH.get(x) + 1 || 1);
    }
    s = s.split('')
         .sort(function (a, b) {
            if (sH.get(a) === sH.get(b)) {
                return a.charCodeAt() - b.charCodeAt();
            } else {
                return sH.get(b) - sH.get(a);
            }
            })
         .join('');
    return answer = s;
}
console.log(solution('aaAAcccbbbBB')); // bbbcccAABBaa
console.log(solution('kdkDKKGkdkgks')); // kkkkkKKddDGgs