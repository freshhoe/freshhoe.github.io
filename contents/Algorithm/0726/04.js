// # 4
// string의 많은 생성은 효율성이 떨어진다.

let words = ["skudy", "kstue", "time", "back", "good"];
let answer = 0;
let len = words.length;
words.sort((a,b) => a.length - b.length); // 짧은 것을 기준으로 비교해 반복비교 횟수 줄임

function isUnique(short, long) {
    for (let x of short) {
        if(long.indexOf(x) !== -1) return false;
    }
    return true;
}

for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
        if(isUnique(words[i], words[j])) {
            let tmp = words[i].length * words[j].length;
            answer = Math.max(answer, tmp);
        }   
    }
}

console.log(answer);