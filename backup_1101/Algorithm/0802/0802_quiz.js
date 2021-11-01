function solution (n) {
    let answer = [];
    let numArr = [];
    function DFS (n) {
        if (n === 0) {
            return;
        } else {
            DFS(parseInt(n / 10));
            numArr.push(n % 10);
        }
    }
    DFS(n)

    let N = numArr.length;
    let tmp = [];
    let check = Array.from({length: N}, () => 0);

    function DFS2 (L) {
        if (L === N) {
            if (Number(tmp.slice().join('')) > n) {
                answer.push(Number(tmp.slice().join('')));
            }
        } else {
            for (let i = 0; i < N; i++) {
                if (check[i] === 0) {
                    check[i] = 1; 
                    tmp.push(numArr[i]);
                    DFS2(L + 1);
                    tmp.pop();
                    check[i] = 0;
                }
            }
        } 
    }
    DFS2(0);

    answer = answer.sort((a, b) => a - b);
    if (answer.length === 0) {
        return answer = -1;
    } else {
        return answer[0];
    } 
}
console.log(solution(123)); // 132
console.log(solution(321)); // -1
console.log(solution(20573)); // 20735

console.log(solution(156)); //165
console.log(solution(330)); //-1
console.log(solution(27711)); //71127
console.log(solution(54312)); //54321
console.log(solution(765423)); //765432
console.log(solution(33051)); //33105
console.log(solution(6543721)); //6547123
console.log(solution(3902830)); //3903028
console.log(solution(54321)); //-1
console.log(solution(54300)); //-1