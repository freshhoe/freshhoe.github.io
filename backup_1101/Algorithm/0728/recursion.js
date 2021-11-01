let n = 3;  
function solution (v) {
    if (v === 0) {
        return;
    } else {
        solution (v - 1);
        console.log(v);
    }
}
console.log(solution(n));
// 스택 프레임의 메타 정보 : 매개변수, 지역변수, 복귀주소