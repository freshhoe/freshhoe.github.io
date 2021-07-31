// 프로그래머스 주식가격 (stack 사용)
// function solution (prices) {
//     let answer = Array.from({length: prices.length}, () => 0);

//     return answer;
// }
let prices = [3, 5, 5, 4, 1];
let N = prices.length;
let answer = Array.from({length: N}, () => 0);
let stack = [];
for (let i = 0; i < N; i++) {
    while (prices[i] < prices[stack[stack.length-1]]) {
        top = stack.pop();
        answer[top] = i - top;
    }
    stack.push(i);
}
while (stack.length) {
    top = stack.pop();
    answer[top] = N - 1 - top;
}
console.log(answer);