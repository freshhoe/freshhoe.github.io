// 교육과정설계
function solution (need, plan) {
    let answer = "YES";
    let queue = need.split('');
    for (let x of plan) {
        if (queue.includes(x)) {
            if (x !== queue.shift()) return answer = "NO";
        }
    }
    if(queue.length > 0) return answer = "NO";  
    return answer;
}
console.log(solution('CBA', 'CBDAGE')) // YES
console.log(solution('CBA', 'CBDBAGE')) // YES