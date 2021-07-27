---
date: '2021-07-27'
title: '[JS Algo] 문자열 구분하기'
categories: ['Algorithm', 'JavaScript']
summary: ''
thumbnail: './Algorithm.png'
---

## Q. 문자열 구분하기
<details>
<summary></summary>
<div markdown="1">       

N개의 문자열이 주어지면 모든 문자열을 구분할 수 있는 최소길이 접두어를 찾는 프로그램을 작성하세요.

</div>
</details>


## A. 풀이
배열의 마지막 값(문자열)까지 조회하게 될 때의 `subsrtring` 의 길이를 반환하면 됩니다. 
`Map` 객체를 사용해 배열 내의 첫 번째 문자열의 `i` 길이의 `substring` 의 값을 `key` 로 누적시킵니다. 배열의 다음 문자열의 동일한 길이의 `substring` 값을 구하고 이 값이 `Map` 객체에 있으면, 배열의 다음 문자열은 조회하지 않습니다. 이제 `i+1` 길이의 `substring` 값을 구하는데 마찬가지의 방식으로  

``` javascript
function solution (words) {
    let answer;

    return answer;
}
console.log(solution(["seeasue", "sesseysu", "semeas"])); // 3
console.log(solution(["ackky", "kabck", "yokkcs"])); // 1   
console.log(solution(["longlong", "longtong", "longbig"])); // 5

let words = ["seeasue", "sesseysu", "semeas"];
let answer;
let N = words[0].length;
let i; // answer로 반환하기 위해 for문 scope 밖에서 선언해 줌.
let sh = new Map ();

for (i = 0; i < N; i++) {
    let flag = true; // for문 out을 위한 신호 변수
    for (let j = 0; j < words.length; j++) {
        let char = words[j].substring(0, i+1);
        if(sh.has(char)){
            flag = false;
            break;
        }   
        sh.set(char, 1);
    }
    if(flag) break;
}
answer = i + 1;
console.log(answer);
```
