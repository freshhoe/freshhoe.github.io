function solution (product, m) {
    let answer = 0;
    let n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])); // a 가 앞 자리, b 가 뒷 자리
    
    for (let i = 0; i < N; i++) {
        let money = m - (product[i][0] / 2 + product[i][1]);
        let cnt = 1;
        for (let j = 0; j < N; j++) {
            if (j !== 1 && (product[j][0] + product[j][1]) > money) break; // 아래 if문의 else 조건에 break가 아닌 
                                                                           // 별개의 조건으로 break 하는 이유는 j === i 일때를 걸러내지 못함.
            if (j !== 1 && (product[j][0] + product[j][1]) <= money) {
                money -= (product[j][0] + product[j][1]);
                cnt ++;
            }

        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}
console.log(solution([[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]], 28));
// i 번째 상품을 할인 받는다고 가정하고 (기준을 어떻게 잡는지가 중요) 시작하는 아이디어가 중요.
