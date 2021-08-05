// 친구인가? (Disjoint-Set : Union & Find)
// 리뷰 필요
// union & find (unf) 자료구조 활용
// unf 를 위한 배열 생성
// 인덱스는 학생 번호
// 해당 인덱스의 값은 집합 번호
// Find 라는 재귀함수는 매개변수(학생인덱스?)의 집합 번호를 반환

function solution (n, nums, s1, s2) {
    let answer = "YES";
    let unf = Array.from({length: n + 1}, (v, i) => i);

    function Find(v) {
        if (v === unf[v]) {
            return v;
        } else {
            return unf[v] = Find(unf[v]);
        }
    }

    function Union(a, b) {
        let fa = Find(a);
        let fb = Find(b);
        if (fa != fb) unf[fa] = fb;
    }
    
    for (let [a, b] of nums) {
        Union(a, b);
    }

    if (Find(s1) !== Find(s2)) return "NO";
    return answer;
}
console.log(solution(9, [[1, 2], [2, 3], [3, 4], [1, 5], 
                    [6, 7], [7, 8], [8, 9]], 3, 8)); // NO

