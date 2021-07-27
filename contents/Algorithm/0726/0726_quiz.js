// function solution(words) {

//     return answer;
// }
// console.log(solution(["steasue", "sasseysu", "kseseas"]));
// console.log(solution(["ackky", "kabck", "yokkcs"]));

let words = ["steasue", "sasseysu", "kseseas"];
words.sort((a,b) => a.length - b.length);
let answer = [];
let len = words.length;

// console.log(words[0].split('')[0]);

function minEqual(short, long) {
    let sh = new Map(short);
    for (i = 0; i < short.length; i++) {
        for (j = 0; j < long.length; j++) {
            if (short[i] === long[j]) {

            }
        }
    }
    for (let x of short) {
        if (long.indexOf(x) !== -1) return false;
    return true;
}

for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
        if (isUnique(words[i], words[j])) {
             let tmp = words[i].length * words[j].length;
             answer.push();
        }   
    }
}
