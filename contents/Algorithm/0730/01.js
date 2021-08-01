// 그리디를 사용한다고 했을 때 반례를 생각해보면 계속 쓸지말지 결정하는데 도움
// 아니라면 동적 계획법 
// 원소가 배수 관계가 아니면 해당 문제는 그리디 적용이 되지 않는다. 마지막 문제 입력 2가 반례

// 동전교환
function solution (nums, m) {
    let answer = 0;
    for (let i = nums.length-1; i >= 0; i--) {
        answer += (parseInt(m / nums[i]));
        m = m % nums[i];
    }
    return answer;
}
console.log(solution([1, 5, 10], 15)); // 2
