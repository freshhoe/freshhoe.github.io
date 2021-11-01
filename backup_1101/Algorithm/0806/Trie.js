// Trie 자료구조
// 문자열 검색하는 자료구조. 다진트리 형태.
class Node {
    constructor () {
        this.end = false;
        this.child = {}
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
            }
            cur.end = true;
        }
        
        search (word) {
            let cur = this.root;
            for (let x of word) {
                if (cur.child[x] === undefined) return false;
                cur = cur.child[x];
            }
            // 어떤 단어가 있었다면 여기에 true 값이 있어야 함. (어떤 단어의 끝 노드에는 true 이므로)
            return cur.end;
        }

        prefixS (str) {
            let cur = this.root;
            for (let x of str) {
                if (cur.child[x] === undefined) return false;
                cur = cur.child[x];
            }
            return true;
        }
}

export {Node, Trie};

let trie = new Trie ();
trie.insert('book');
trie.insert('books');
trie.insert('bocd');
console.log(trie.search('book'));
console.log(trie.search('books'));
console.log(trie.prefixS('bo'));
console.log(trie.prefixS('boc'));

