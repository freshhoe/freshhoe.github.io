// 침몰하는 타이타닉
function solution (nums, m) {
    let answer;

    return answer;
}
console.log(solution([90, 50, 70, 100, 60], 140)); // 3

let answer = 0;
let nums = [90, 50, 70, 100, 60];
let m = 140;
let lt = 0;
let rt = nums.length-1;
nums.sort((a,b) => a- b);
while (lt <= rt) { // '=' 를 꼭 삽입해줘야 lt, rt 값이 같은 거까지 처리해줄 수 있다.
    if (nums[lt] + nums[rt] <= m) {
        answer++;
        lt++; 
        rt--;
    } else {
        answer++;
        rt--;
    }
}
console.log(answer);
