// # 5
// let s = 'abcbdcba'
// let answer = 'YES';
// let lt = 0, rt = s.length-1;

// while (lt < rt) {
//     if (s[lt] !== s[rt]) {
//         let sub1 = s.substring(lt, rt);
//         let sub2 = s.substring(lt+1, rt+1);
//         if (sub1.split('').reverse().join('') !== sub1 &&
//             sub2.split('').reverse().join('') !== sub2 ) {
//             answer = 'NO'
//         }
//         break;
//     } else {
//         lt++, rt--;
//     }
// }

// console.log(answer);