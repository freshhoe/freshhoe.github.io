// 충돌하는 수열
function solution(nums) {
    let answer = [];
    answer.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        if (answer[answer.length - 1] > 0 && nums[i] < 0) {
            while (answer[answer.length - 1] < Math.abs(nums[i]) &&
                answer[answer.length - 1] !== Math.abs(nums[i]) &&
                answer[answer.length - 1] > 0 && nums[i] < 0) {
                answer.pop();
            }
            if (answer[answer.length - 1] === Math.abs(nums[i])) {
                answer.pop();
                continue;
            } else if (answer[answer.length - 1] > Math.abs(nums[i])) {
                continue;
            } else {
                answer.push(nums[i]);
            }
        } else {
            answer.push(nums[i]);
        }
    }
    return answer;
}
console.log(solution([3, 5, -2, -5])); // [3]
console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]

function solution2(nums){
    let answer=[];
    let stack=[], flag;
    for(let x of nums){
        if(x>0) stack.push(x);
        else{
            if(stack.length===0 || stack[stack.length-1]<0){
                stack.push(x);
            }
            else{
                flag=0;
                while(stack.length>0 && stack[stack.length-1]>0){
                    let left=stack.pop();
                    if(Math.abs(left)<Math.abs(x)){
                        flag=1;
                    }
                    else if(Math.abs(left)===Math.abs(x)){
                        flag=0;
                        break;
                    }
                    else{
                        stack.push(left);
                        flag=0;
                        break;
                    }
                }
                if(flag) stack.push(x);
            }
        }
    }
    answer=stack;
    return answer;
}
console.log(solution2([3, 5, -2, -5])); // [3]
console.log(solution2([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
console.log(solution2([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]
