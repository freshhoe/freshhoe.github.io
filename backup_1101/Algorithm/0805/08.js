// 최대공통부분문자열(LCS)
// 구글코리아 기술면접에서 냄
function solution (s1, s2) {
    let answer;
    // dy[i][j] : s1[0 ~ i] 와 s2[0 ~ j] 의 최대공통 부분문자열의 길이
    let n = s1.length;
    let m = s2.length;
    let dy = Array.from(Array(1001), () => Array(1001).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dy[i][j] = dy[i - 1][j - 1] + 1;
            } else {
                dy[i][j] = Math.max(dy[i - 1][j], dy[i][j - 1]);
            }
        }
    }

    answer = dy[n][m];
    let path = [];
    function DFS(p1, p2) {
        if (p1 === 0 || p2 === 0) return;
        if (s1[p1 - 1] === s2[p2 - 1]) {
            DFS(p1 - 1, p2 - 1);
            path.push(s1[p1 - 1]);
        } else {
            if (dy[p1 - 1][p2] > dy[p1][p2 - 1]) {
                DFS(p1 - 1, p2);
            } else {
                DFS(p1, p2 - 1);
            }
        }
    }
    
    DFS(n, m);
    return [answer, path];
}
console.log(solution('acbehf', 'abefc')); // 4