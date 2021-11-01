function solution(s, e) {
  let answer = 0;

  function BFS() {
    let check = Array.from({ length: 200000 }, () => 0);
    let queue = [];
    queue.push(s);
    check[s] = 1;
    let L = 0;

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let x = queue.shift();
        for (let nextX of [x + 1, x - 1, x * 2]) {
          if (nextX === e + 1) return L + 1;
          if (nextX > 0 && nextX <= 200000 && check[nextX] === 0) {
            check[nextX] = 1;
            queue.push(nextX);
          }
        }
      }
      L++;
      e++;
      if (e > 200000) return -1;
    }
  }
  answer = BFS();
  return answer;
}
console.log(solution(5, 6)); // 2
console.log(solution(10, 3)); // 3
console.log(solution(1, 11)); // 6
