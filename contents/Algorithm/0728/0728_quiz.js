function solution (num, k) {
    let answer;
    let stack = [];
    let s = String(num);
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length-1] < s[i]) {
            stack.push(s[i]);
        } else {
            if (k === 0) {
                stack.push(s[i]);
                continue;
            } else {
                while(stack.length !== 0 && stack[stack.length-1] > s[i]) {
                    stack.pop();
                    k--;
                    if (k === 0) break;
                }
            }
            stack.push(s[i]);  
        }
    }
    
    if (k !== 0) {
        while (k !== 0) {
            stack.pop();
            k--;
        }
    }
    answer = Number(stack.join(''));
    return answer;
}
console.log(solution(1230, 3)); //0
console.log(solution(7612345, 5)); //12
console.log(solution(999102345, 5)); //234
console.log(solution(10000023, 2)); //2
console.log(solution(30000043, 3)); //0
console.log(solution(12345670, 7)); //0
console.log(solution(123456, 3)); //123
console.log(solution(12003, 3)); //0
console.log(solution(9, 1)); //0
console.log(solution(98765432, 7)); //2


// let num = 123;
// s = String(num);
// s = s.split('');
// // console.log(s);
// // console.log(s);
// // console.log(s[1] > s[0]);
// let answer;
// let stack = [];
// let k = 3;


// while (k === 0) {
//     for (let i = 0; i < s.length; i++) {
//         if (stack.length === 0 || stack[stack.length-1] < s[i]) {
//             stack.push(s[i]);
//         } else {
//             while(stack.length !== 0 && stack[stack.length-1] >= s[i]) {
//                 stack.pop();
//                 k--;
//                 if (k === 0) break;
//             }
//             stack.push(s[i]);  
//         }
//     }
// }
// console.log(stack);

// for (let i = 0; i < s.length; i++) {
//     if (stack.length === 0 || stack[stack.length-1] < s[i]) {
//         stack.push(s[i]);
//     } else {
//         if (k === 0) {
//             stack.push(s[i]);
//             continue;
//         }
//         while(stack.length !== 0 && stack[stack.length-1] >= s[i]) {
//             stack.pop();
//             k--;
//             if (k === 0) break;
//         }
//         stack.push(s[i]);  
//     }
// }

// if (k !== 0) {
//     while (k !== 0) {
//         stack.pop();
//         k--;
//     }
// }

// console.log(k);
// console.log(stack);
// console.log(Number(stack));
// console.log(Number(stack.join('')));

// if (stack.length === 0 || stack[-1] < s[0]) {
//     stack.push(s[0]);
// }
// if (stack.length === 0 || stack[stack.length-1] < s[1]) {
//     stack.push(s[1]);
// }
// console.log(stack);
// while(stack.length !== 0 && stack[stack.length-1] >= s[2]) {
//     stack.pop();
//     console.log(stack);
//     k--;
//     console.log(k);
//     if (k === 0) break;
// }
// stack.push(s[2]);



// console.log(s);
// console.log(answer);
// console.log(answer);
// console.log(answer);
// console.log(answer);
