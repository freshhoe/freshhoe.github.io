// 회의실 배정
// 끝나는 시간을 기준으로 첫 배정하는 것이 최적 (그리디 사용)
// 그 이후는 첫 배정의 끝나는 시간과 다음 회의의 시작시간이 크거나 같은 것을 배정
// 그리디를 하는 이유는 NlogN을 logN으로 낮추기 위함.
// 회의 끝나는 시간이 모두 같다면 시작시간이 낮은걸 기준으로 정렬하는 조건 추가가 필요하다.
// ex) [1, 3] [2, 3] [3, 3] ==> [1, 3] [3, 3]

function solution (meeting) {
    let answer = 0;
    meeting.sort((a,b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    let et = 0;
    for (let x of meeting) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }
    return answer;
}
console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])); // 3

