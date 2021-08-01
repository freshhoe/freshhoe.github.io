// for 문 안에 sort 하면 타임 리밋에 걸림
// logN * 2 과 NlogN 은 큰 차이
// 따라서 Max heap 사용 (부모 노드의 값이 항상 자식보다 크거나 같음)
// insert 후 upheap 으로 maxheap 되는데 logN 

// index 시작이 1일 경우
// left child: parent node * 2
// right child: parent node * 2 + 1
// parent node: child node / 2

class minHeap {
    constructor () { // class 생성하면 빈 배열(heap)에 맨 앞자리에 큰 수 넣은 상태
        this.heap = [];
        this.heap.push(Number.MIN_SAFE_INTEGER);
    }

    insert (val) {
        this.heap.push(val); // val 을 heap 의 가장 마지막에 push
        this.upheap(this.heap.length - 1); // heap 마지막 값의 인덱스를 인수로 할당
    }

    upheap (pos) {
        let tmp = this.heap[pos];
        while (tmp < this.heap[parseInt(pos/2)]) { // heap 마지막 값과 그 부모 노드의 크기 비교
            this.heap[pos] = this.heap[parseInt(pos/2)]; 
            pos = parseInt(pos/2);
        }
        this.heap[pos] = tmp;
    }

    get () {
        if (this.heap.length === 2) {
            return this.heap.pop();
        }
        let res = this.heap[1];
        this.heap[1] = this.heap.pop(); // get 호출시 heap(배열) 크기는 줄어야 함.
        this.downheap(1, this.heap.length - 1); // 현재 루트 노드 인덱스와 마지막 인덱스를 인수로 할당
        return res;
    }
    // downheap 코드 리뷰 필요
    downheap (pos, len) {
        let tmp = this.heap[pos];
        let child;
        while (pos <= parseInt(len/2)) {
            child = pos * 2;
            // len: 마지막 노드의 인덱스. 마지막 자료의 앞자료까지만 down을 해야함.
            // child < len 을 해줘서 indexOutOfRange가 일어나지 않도록 방지.
            if (child < len && this.heap[child] > this.heap[child+1]) child++;
            if(tmp <= this.heap[child]) break;
            this.heap[pos] = this.heap[child];
            pos = child;
        }
        this.heap[pos] = tmp; // 루트 노드의 값을 while문을 돌고 나와 제 인덱스를 찾은 후 삽입
    }

    size () {
        return this.heap.length - 1; // 맨 앞에 큰 수가 들어가 있으므로 heap(배열) size 는 -1 해줘야 함.
    }

    show () {
        for (let i = 1; i <= this.size(); i++) {
            console.log(this.heap[i]);
        }
        return true;
    }
}
// class 사용해 주어진 배열을 minheap으로 만드는 함수
function minHeapTest (nums) {
    let minH = new minHeap ();
    for (let x of nums) {
        minH.insert(x);
    }
    // console.log(`poped: ${minH.get()}`);
    minH.show();
    return;
}
console.log(minHeapTest([5,4,3,6,7,2,9]))