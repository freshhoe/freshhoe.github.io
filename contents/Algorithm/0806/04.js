// 자동완성
// Node 에 카운트 변수 초기화
function solution (words) {
    class Node {
        constructor () {
            this.end = false;
            this.child = {}
            this.cnt = 0;
        }
    }
    
    class Trie {
        constructor () {
            this.root = new Node();
            }
    
            insert (word) {
                let cur = this.root;
                for (let x of word) {
                     if (cur.child[x] === undefined) {
                         cur.child[x] = new Node();
                    }
                    cur = cur.child[x];
                    cur.cnt++;
                }
                cur.end = true;
            }
    
            getCount(word) {
                let cur = this.root;
                let count = 0;
                for (let x of word) {
                    count++;
                    cur = cur.child[x];
                    if (cur.cnt === 1) return count;                
                }
                return count;
            }
    
    }
    
    let answer = 0;
    let trie = new Trie ();

    for (let word of words) {
        trie.insert(word);
    }

    for (let word of words) {
        answer += trie.getCount(word);
    }

    return answer;
}
console.log(solution(["go","gone","guild"])); // 7