// 공통문자열
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

// 소스코드
function solution2(strs){ 
    let answer=""; 
    let len=Number.MAX_SAFE_INTEGER;    
    strs.forEach(x => {
        len=Math.min(len, x.length);
    });
    for(let i=0; i<len; i++){
        let s=new Set();
        strs.forEach(x=>{
            s.add(x[i]);
        });
        if(s.size===1) answer+=strs[0][i];
    }
    return answer;
}

console.log(solution2(["long", "longtime", "longest"]));

function solution3(strs){ 
    let answer=""; 
    let len=Number.MAX_SAFE_INTEGER;    
    strs.forEach(x => {
        len=Math.min(len, x.length);
    });
    for(let i=0; i<len; i++){
        let m=new Map();
        strs.forEach(x=>{
            m.set(x[i], (m.get(x[i])||0)+1);
        });
        if(m.get(strs[0][i])===strs.length) answer+=strs[0][i];
    }
    return answer;
}

console.log(solution3(["long", "longtime", "longest"]));