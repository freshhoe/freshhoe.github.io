function solution (s) {
    let answer = '';
    let num = '';
    let str = '';
    
    for (let x of s) {
        if (Number(x)) num += x;
        if (isNaN(Number(x)) && x !== '(' && x !== ')')  {
            str += x;
            if (num.length === 0) {
                answer += str;
                str='';
            }
        }    
        if (x === ')') {
            for (let i = 0; i < num; i++) {
                answer += str;
            }
            num = '';
            str = '';
        }
    }
    return answer;
}
console.log(solution('2(ab)k3(bc)')); // ababkbcbcbc
console.log(solution('3(a2(b))ef')); // abbabbabbef

// let answer = '';
// let s = '2(ab)k3(bc)';



// for (let x of s) {
//     if (Number(x)) num += x;
//     if (isNaN(Number(x)) && x !== '(' && x !== ')')  {
//         str += x;
//         if (num.length === 0) {
//             answer+=str;
//             str='';
//         }
//     }    
//     if (x === ')') {
//         for (let i = 0; i < num; i++) {
//             answer += str;
//         }
//         num = '';
//         str = '';
//     }
// }
// console.log(num);
// console.log(str);
// console.log(answer);

// for (let x of s) {
//     if (Number(x)) {
//         num += x;
//     } else if (isNaN(Number(x)) && x !== '(') {
//         str += x;
//     } else if (x === ')') {
//         for (let i = 0; i < num; i++) {
//             answer += str;
//         }
//         num = '';
//         str = '';
//     }
// }
// console.log(answer);
// s = s.split('');
// console.log(s);
// let numSt = [];
// let strSt= [];

// for (let i = 0; i < s.length; i++) {
//     if (Number(s[i])) {
//         numSt.push(s[i]);
//         if (numSt.length > 1) {
//             numSt = Number(numSt.join(''));
//         }
//     } else {
//         strSt.push(s[i]);
//     }
//     if(s[i] === ')') {
//         for (let i = 0; )
//         answer.push
//     }
// }

// let a = ['a', 'b'];
// let b = ''; 
// for(let i = 0; i < 3; i++) {
//     b.push(a[])
//     if (i === )
// }