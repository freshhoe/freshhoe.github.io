// 최대 길이 연속부분수열
function solution (nums, k) {
    let answer;


    return answer;
}
console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2)); // 9

function solution2(nums, k){
    let answer=0, lt=0, cnt=0;
    for(let rt=0; rt<nums.length; rt++){
        if(nums[rt]===0) cnt++;
        while(cnt>k){
            if(nums[lt]===0) cnt--; 
            lt++;      
        }
        answer=Math.max(answer, rt-lt+1);
    }        
    return answer;
}

console.log(solution2([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));