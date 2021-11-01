function solution(nums) {
  let answer = [];
  let tmp;
  for (let n of nums) {
    n--;
    let t = 1;
    for (let i = 1; ; i++) {
      if (n >= t * 9) n -= t * 9;
      else {
        tmp = parseInt((i + 1) / 2);
        let res = Array(100).fill(0);
        let pal = '';
        res[0] = 1;
        for (let j = 0; j < tmp; j++) {
          res[j] += parseInt(n / t);
          pal += res[j];
          n %= t;
          t /= 10;
        }
        for (let j = tmp - (i % 2) - 1; j >= 0; j--) {
          pal += res[j];
        }
        answer.push(parseInt(pal));
        break;
      }
      if (i % 2 === 0) t *= 10;
    }
  }
  return answer;
}
console.log(solution([1, 12, 24]));
console.log(solution([10, 15, 30]));
console.log(solution([345, 3456, 2352, 939595]));
console.log(solution([345, 3456, 2352, 2326, 138748, 395802, 930595]));
console.log(
  solution([643809, 968068, 287576, 798592, 138749, 395802, 939595, 958085]),
);
