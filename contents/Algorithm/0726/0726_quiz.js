function solution(words) {
    words.sort((a,b) => a.length - b.length);
    let answer = [];
    let len = words.length;
    let sH = new Map ();
    for (let x of words[0]) {
        sH.set(x, sH.get(x) + 1 || 1);
    }
    for (let i = 1; i < words.length; i++) {
        let tmp = new Map ();
        for (let x of words[i]) {
            if(sH.get(x)) {
                tmp.set(x, tmp.get(x) + 1 || 1);
                sH.set(x, sH.get(x) - 1);
            }
        }
        sH = tmp;
    }

    let str ="";
    for (let [key, val] of sH) {
        str += key.repeat(val);
    }
    answer = str.split('');

    return answer;
}
console.log(solution(["steasue", "sasseysu", "kseseas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));