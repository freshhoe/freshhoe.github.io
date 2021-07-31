function solution (words) {
    let answer = 1;
    let N = words.length;
    let i = 0;
    if (words[i] > words[i + 1]) { // 첫 배열 값부터 감소할 경우
        while(i + 1 < N && words[i] > words[i + 1]) {
            i++;
        }
        answer = 1;
    } 
    while (i + 1 < N && words[i] === words[i+1]) { // 처음부터 계속 같은 문자열만 나올 경우
        i++;
        answer = 0;
    }
    while (i + 1 < N && words[i] < words[i + 1]) { // 증가수열 탐색
        i++;
        answer++;
    }
    if (i === N - 1) answer = 0; // 배열 끝까지 증가수열 탐색했을 경우
    while (i + 1 < N && words[i] > words[i + 1]) { // 감소 수열 탐색
        i++;
        answer++;
    }
    if (answer < 3) answer = 0; // 수열의 값이 3보다 작을 경우
    // answer = Math.max() >> 반복문 밖에서 max 값 갱신 필요
    return answer;
}
// console.log(solution([3, 2, 5, 6, 4, 3, 7])) // 5
// console.log(solution([3, 3, 3])) // 0
// console.log(solution([1, 2, 3, 4, 5])) // 0
// console.log(solution([1, 3, 2])) // 3
// console.log(solution([1, 3, 4])) // 0
// console.log(solution([1, 3, 3])) // 0
// console.log(solution([5, 4, 3, 4, 5, 4])) // 4
console.log(solution([7, 4, 8])); //0
console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
console.log(solution([1, 1, 1, 1, 1])); //0
console.log(solution([5, 4, 3, 2, 1])); //0
console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3