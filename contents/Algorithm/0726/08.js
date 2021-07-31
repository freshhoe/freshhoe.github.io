// 문자열 구분하기
function solution (words) {
    let answer;
    let N = words[0].length;
    let i; // answer로 반환하기 위해 for문 scope 밖에서 선언해 줌.
    let sh = new Map ();

    for (i = 0; i < N; i++) {
        let flag = true; // for문 out을 위한 신호 변수
        for (let j = 0; j < words.length; j++) {
            let char = words[j].substring(0, i+1);
            if(sh.has(char)){
                flag = false;
                break;
            }   
            sh.set(char, 1);
        }
        if(flag) break;
    }
    answer = i + 1;

    return answer;
}
console.log(solution(["seeasue", "sesseysu", "semeas"])); // 3
console.log(solution(["ackky", "kabck", "yokkcs"])); // 1   
console.log(solution(["longlong", "longtong", "longbig"])); // 5