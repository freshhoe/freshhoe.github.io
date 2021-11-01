// 공주 구하기
function solution (n, k) {
    let answer;
    let queue = Array.from({length: n}, (v, i) => i + 1);
    while (queue.length) {
        for (let i = 0; i < k-1; i++) {
            queue.push(queue.shift());
        }
        
        if (queue.length === 1) {
            return answer = queue.shift();
        } else {
            queue.shift();
        }
    }
    return answer;
}
console.log(solution(8, 4)); // 7