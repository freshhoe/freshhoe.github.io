// 사과
function solution (apples, power, m) {
    let answer = 0, sum = 0, lt = 0, boostSum = 0;
    let len = apples.length;

    for (let i = 0; i < len; i++) {
        if (power[i] === 1) sum += apples[i];
    }

    for (let rt = 0; rt < len; rt++) {
        if (power[rt] !== 1) boostSum += apples[rt];
        if (rt >= m - 1) {
            answer = Math.max(boostSum, answer);
            if (power[lt] === 0) boostSum -= apples[lt];
            lt++;
        }
    }
    return answer = answer + sum;
}
console.log(solution([3, 2, 1, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)); // 9
console.log(solution([3, 2, 3, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)); // 10