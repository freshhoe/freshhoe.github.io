// 바둑이 승차
function solution (nums, c) {
    let answer = Number.MIN_SAFE_INTEGER;
    let total = nums.reduce((a, b) => a + b, 0);
    let n = nums.length;

    // tsum 은 그 level 까지의 탄다, 안탄다에 대해 판단이 완료된 애들의 무게합
    // 앞으로 판단해야 할 애들의 무게는 total - tsum 이다. 그런 값을 현재까지 구한 sum 에 더해도,
    // 내가 현재 구한 answer 보다 작다면 더 살펴볼 필요가 없으므로 return.
    // tsum 관련 리뷰 필요. limit 을 주는 것. (삼성 SW 시험은 컷 엣지를 잘 해야함.)
    function DFS (L, sum, tsum) { 
        if (sum > c) return;
        if(sum + (total - tsum) < answer) return; 
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + nums[L], tsum + nums[L]);
            DFS(L + 1, sum, tsum + nums[L]);
        }
    }
    DFS(0, 0, 0)
    return answer;
}
console.log(solution([81, 58, 42, 33, 61], 259)); // 242
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 372