// 접미사 정렬
function solution(s) {
    let answer = [];
    for (i = 0; i < s.length; i++) {
        answer.push(s.substring(i, s.length));
    }
    answer.sort();
    return answer;
}
console.log(solution('kseaedu')); // ["aedu", "du", "eaedu", "edu", "kseaedu", "seaedu", "u"]