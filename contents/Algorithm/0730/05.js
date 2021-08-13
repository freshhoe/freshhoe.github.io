// 배열 인덱스로 반복해서 sort할 필요 없다.
// 수열의 높이 조정
function solution(nums, m){
    let answer=0;
    nums.sort((a, b)=>a-b);
    for(let i=0; i<m; i++){
        nums[0]++;
        nums[nums.length-1]--;
        nums.sort((a, b)=>a-b);
        if(nums[0]===nums[nums.length-1]) break;
    }
    answer=nums[nums.length-1]-nums[0];
    return answer;
}
console.log(solution([2, 1, 3, 7, 5], 2));

// 개선된 코드
function solution2(nums, m){
    let answer=0;
    let ch=Array.from({length:1001}, ()=>0);
    let maxH=Number.MIN_SAFE_INTEGER;
    let minH=Number.MAX_SAFE_INTEGER;
    for(let x of nums){
        ch[x]+=1;
        if(x>maxH) maxH=x;
        if(x<minH) minH=x;
    }
    for(let i=1; i<=m; i++){
        if(maxH===minH) return 0;
        if(ch[maxH]===1){
            ch[maxH]--;
            maxH--;
            ch[maxH]++;
        }
        else{
            ch[maxH]--;
            ch[maxH-1]++;
        }
        if(ch[minH]===1){
            ch[minH]--;
            minH++;
            ch[minH]++;
        }
        else{
            ch[minH]--;
            ch[minH+1]++;
        }
    }
    answer=maxH-minH;
    return answer;
}
console.log(solution2([2, 1, 3, 7, 5], 2));