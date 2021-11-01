// 랜선자르기 (결정알고리즘)
// 어떤 문제의 답이 lt ~ rt 사이에 존재한다는 것이 확실시 되면 결정 알고리즘 사용
// 답이 될 가능성을 검증할 수 있는 함수를 따로 만들어 활용해야 함.
// 답이 될 가능성이 있으면 그것을 답으로 가정하고, 이분탐색으로 더 좋은 답을 찾아가야 함.
// 이분탐색을 통한 최적의 방향이 어딘지, lt 인지 rt 인지를 판단하는 것은 문제마다 다르다.
// 이 문제에서는 1 ~ 802(최대값) 사이에는 분명히 있다는 것을 확실시 할 수 있다.
// 거기서 반을 나눔. 401 로 랜선을 나누면 몫이 각각 2, 1, 1, 1 = 5 개로 11개에 비해 부족하다.
// rt 를 줄인다. 다시 반을 나눔. 이 과정을 반복.
// 13까지 나올 수 있고 이게 답이 될 수 있으나, 더 길게 자를 수 있음. 더 좋은 것, 최적을 찾아가는 과정 필요.
// 이 과정에서 맨 마지막이 답이 된다.

function solution (nums, n) {
    let answer;
    let lt = 1;
    let rt = Math.max(...nums);

    function count (len) {
        let cnt = 0;
        for (let x of nums) {
            cnt += Math.floor(x / len);
        }
        return cnt;
    }

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(mid) >= n) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }

    return answer;
}
console.log(solution([802, 743, 457, 539], 11)); // 200

