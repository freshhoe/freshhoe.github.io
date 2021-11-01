// 봉우리
function solution(nums) {
    let answer = 0;
    let N = nums.length;
    let dx = [-1, 0, 1, 0]; // 행 방향 조회 인덱스 초기화
    let dy = [0, 1, 0, -1]; // 열 방향 조회 인덱스 초기화
    // 위쪽 부터 시계방향
    // dx, dy [-1, 0] : 현재 조회된 2차원 원소(i,j)의 위쪽 값
    // dx, dy [0, 1] : 현재 조회된 2차원 원소(i,j)의 오른쪽 값
    // dx, dy [1, 0] : 현재 조회된 2차원 원소(i,j)의 아래쪽 값
    // dx, dy [0, -1] : 현재 조회된 2차원 원소(i,j)의 왼쪽 값
    // 만약 8방향을 조회하라고 하면 추가로 dx, dy 초기화 해놓고 시작

    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            let flag = true;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (nx >= 0 && nx < N && // 경계선 벗어남 여부 확인 조건
                    ny >= 0 && ny < N &&
                    nums[nx][ny] >= nums[i][j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) answer++;
        }
    }
    return answer;
}
console.log(solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
])); // 10