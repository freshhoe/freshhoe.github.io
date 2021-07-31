// 거리 두기
// function solution (nums) {
//     let answer;
//     return answer;
// }
// console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1])); // 2

// 왼쪽에 이미 앉아있는 사람과의 거리와
// 오른쪽에 이미 앉아있는 사람과의 거리를 각각 구한다.

let words = [1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
let answer = 0;
let N = words.length;
let distArr = Array.from({length:N}, () => 0); // 거리 배열 0 초기화
// 왼쪽에서부터의 거리와 오른쪽에서부터의 거리를 각각 측정하는데,
// 두 측정값 중 최소값이 양쪽을 모두 고려한 거리값이 된다.
// 이때 d 값 초기화를 하지 않으면 먼저 측정된 거리값에 의해 나중에 측정된 거리값이
// 최소값 비교에 의한 갱신이 되지 않을 수 있기 때문.
let d = 1000; 

// 왼쪽에서부터의 거리를 측정하기 위해 배열의 왼쪽부터 조회
// 값이 1 이면 거리 값은 0 이고 거리 배열에 삽입
// 값이 0 이면 거리 값을 1 증가시키고 거리 배열에 삽입
for (let i = 0; i < N; i++) {
    if (words[i] === 1) { 
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
d = 1000;
for (let j = N - 1; j >= 0; j--) {
    if (words[j] === 1) {
        d = 0; // 이미 왼쪽 순회 때 0 삽입 됐으므로, 추가 삽입 불필요
    } else {
        d++;
        distArr[j] = Math.min(distArr[j], d);
    }
}
console.log(distArr);
answer = Math.max(...distArr); // 거리배열 구조분해 할당 후 최대값 산출
console.log(answer);
