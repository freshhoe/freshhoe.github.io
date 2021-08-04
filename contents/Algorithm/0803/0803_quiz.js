// 미제출
function solution (nums) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = nums.length;
    let tmp = [];
    let sumBlack = nums.reduce((a, b) => a + b[1], 0);
    
    function DFS (L, s, wSum, bSum) {
        if (L === n / 2) {
            let oppo = sumBlack - bSum;
            answer = Math.min(answer, Math.abs(wSum - oppo));
        } else {
            for (let i = s; i < n; i++) {
                DFS(L + 1, i + 1, wSum + nums[i][0], bSum + nums[i][1]);
            }
        }
    }
    DFS(0, 0, 0, 0);
    return answer;
}
console.log(solution([[87, 84], [66, 78], [94, 94], [93, 87], 
                              [72, 92], [78, 63]])); // 2

// source code
function solution2(cans){  
    let answer = Number.MAX_SAFE_INTEGER;
    let len = cans.length;
    ch = Array.from({length:len}, () => 0);
    function DFS(L, s){
        if(L === len / 2){
            let A = [], B = [];
            for(let i = 0; i < len; i++){
                if(ch[i] === 1) A.push(i);
                else B.push(i);
            }
            let Asum = 0, Bsum = 0;
            for(let i = 0; i < A.length; i++){
                Asum += cans[A[i]][0];
                Bsum += cans[B[i]][1];
            }
            answer = Math.min(answer, Math.abs(Asum - Bsum));
        }
        else{
            for(let i = s; i < len; i++){
                ch[i] = 1;
                DFS(L + 1, i + 1);
                ch[i] = 0;
            }
        }
    }
    DFS(0, 0);
    return answer;
}

console.log(
solution([
    [15291, 16507],
    [18181, 3446],
    [8872, 13937],
    [8750, 14365],
    [16111, 8710],
    [30345, 16793],
    [16266, 25736],
    [206, 13167],
])
); //86
console.log(
solution([
    [11220, 11404],
    [26537, 28469],
    [7129, 16964],
    [10090, 5749],
    [14028, 29330],
    [31060, 17792],
    [21391, 21976],
    [32011, 8954],
    [11657, 27641],
    [23742, 29411],
])
); //191
console.log(
solution([
    [9210, 13615],
    [11731, 8848],
    [15885, 32108],
    [19707, 11195],
    [989, 18498],
    [22245, 4348],
])
); //553
console.log(
solution([
    [9210, 13615],
    [11731, 8848],
    [15885, 32108],
    [19707, 11195],
    [989, 18498],
    [22245, 4348],
    [123, 154],
    [2345, 1234],
])
); //516
console.log(
solution([
    [9210, 13615],
    [11731, 8848],
    [15885, 32108],
    [19707, 11195],
    [989, 18498],
    [22245, 4348],
    [1123, 2585],
    [19048, 408],
    [28252, 16646],
    [20055, 26092],
    [12866, 24303],
    [781, 15025],
    [122, 7920],
    [4681, 12670],
    [30671, 18942],
    [28989, 14990],
])
); //3

