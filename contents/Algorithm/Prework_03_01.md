---
date: '2021-07-26'
title: '[JS Algo] K번째 큰 수'
categories: ['Algorithm', 'JavaScript']
summary: 'N장의 카드 중 3장을 뽑아 합을 기록하고, 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성합니다.'
thumbnail: './Algorithm.png'
---

## Q. K번째 큰 수
<details>
<summary></summary>
<div markdown="1">       

현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가
여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려
고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력
하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값
은 22입니다.

</div>
</details>


## A. 풀이
카드(숫자) 배열 중 3개씩 뽑아 만들 수 있는 카드 조합의 합들을 구해야 합니다. 카드 배열은 중복이 허용되므로 합 또한 중복된 값이 나올 수 있습니다. 카드 조합의 합의 배열을 내림차순으로 정렬하고, 그 합의 배열을 `Set()` 객체를 통해 중복 값을 제거합니다. `...` 연산자로 배열로 바꾼 뒤 입력값으로 주어진 `k`번째 값을 반환합니다.

```javascript
function solution( nums, k ) {
    let answer;
    let N = nums.length;
    let sumArr = [];
    
    for (let i = 0; i < N; i++) {
        for (let j = i+1; j < N; j++) {
            for (let k = j+1; k < N; k++) {
                sumArr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    let sumSet = new Set(sumArr.sort((a, b) => b - a));
    answer = [...sumSet][k-1];

    return answer;
}
console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3)); // 143
console.log(solution([5, 5, 5, 4, 4, 3, 2, 1], 2)); // 14
```