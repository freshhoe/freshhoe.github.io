// 거리 두기
function solution(nums) {
    let answer;
    let N = nums.length;
    let distArr = Array.from({length: 10}, () => 0); // 거리 배열 0 초기화
    let d = 1000;

    // 왼쪽에서부터의 거리를 측정하기 위해 배열의 왼쪽부터 조회
    // 값이 1 이면 거리 값은 0 이고 거리 배열에 삽입
    // 값이 0 이면 거리 값을 1 증가시키고 거리 배열에 삽입
    for (let i = 0; i < N; i++) {
        if (nums[i] === 1) {
            d = 0;
            distArr[i] = d;
        } else {
            d++;
            distArr[i] = d;
        }
    }
    // 거리 값 초기화
    // 오른쪽에서부터의 거리를 측정하기 위해 배열의 오른쪽부터 조회
    // 값이 1 이면 거리 값을 0 으로하고 거리 배열에 삽입
    let d = 1000;
    for (let j = N - 1; j >= 0; j--) {
        if (nums[j === 1]) {
            d = 0; // 이미 왼쪽 순회 때 0 삽입 됐으므로, 추가 삽입 불필요
        } else {
            d++;
            distArr[i] = Math.min(distArr[i], d);
        }
    }
    answer = Math.max(...distArr); // 거리배열 구조분해 할당 후 최대값 산출
    return answer;
}
console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1])); // 2