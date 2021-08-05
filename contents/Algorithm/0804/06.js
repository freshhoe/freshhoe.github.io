// 뮤직 비디오 (결정 알고리즘)
// m 보다 작거나 같게 하는 dvd 최소 용량을 반환해야함.
// lt 를 9, rt 는 곡 길이의 합 45 로 초기화
// (lt + rt) / 2 = 27(용량)에 들어올 수 있는 곡 길이들의 합
// 최소 용량 크기를 찾고 있으므로 rt 를 줄임.

function solution (songs, m) {
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a, b) => a + b, 0);

    function count(songs, capacity) {
        // dvd 한 장은 쓴다는 가정으로 cnt = 1
        let cnt = 1, sum = 0;
        for (let x of songs) {
            // 용량 초과 확인
            if (sum + x > capacity) {
                cnt++;
                sum = x; // 초과된 값부터 다시 누적합 계산
            } else {
                sum += x;
            }
        }
        return cnt;
    }

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 17