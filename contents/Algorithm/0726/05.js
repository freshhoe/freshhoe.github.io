// 회문문자열2
function solution (s) {
    let answer = 'YES';
    let lt = 0, rt = s.length-1; //lt, rt는 각각 왼쪽, 오른쪽에서 순회할 때 사용되는 인덱스를 의미

    while (lt < rt) {
        if (s[lt] !== s[rt]) {
            let sub1 = substring(lt, rt);
            let sub2 = substring(lt+1, rt+1);
            if (sub1 !== sub1.split('').reverse().join('') &&
                sub2 !== sub2.split('').reverse().join('')) {
                    answer = 'NO';
                }
            break;
        } else {
            lt++, rt--;
        }
    }
    return answer;
}
console.log(solution('abcbdcba')); // YES
console.log(solution('abcabbakcba')); // YES
console.log(solution('abcacbakcba')); // NO