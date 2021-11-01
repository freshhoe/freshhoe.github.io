// 마구간 정하기 (결정 알고리즘)
// 리뷰 필요 
// 마구간의 첫 번째 좌표값으로 lt 를 초기화하면 안된다. 
// rt 는 가장 끝 좌표값으로 초기화

function solution (stables, c) {
    let answer;
    stables.sort((a,b) => a - b);
    let lt = 1;
    let rt = stables[stables.length - 1];

    function count(stables, dist) {
        let cnt = 1, ep = stables[0];
        for (let i = 1; i < stables.length; i++) {
            if (stables[i] - ep >= dist) {
                cnt++;
                ep = stables[i];
            }
        }
        return cnt;
    }

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(stables, mid) >= c) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }

    return answer;
}
console.log(solution([1, 2, 8, 4, 9], 3)); // 3
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8)); // 10
