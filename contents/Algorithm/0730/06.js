class maxHeap {
    constructor () { // class 생성하면 빈 배열(heap)에 맨 앞자리에 큰 수 넣은 상태
        this.heap = [];
        this.heap.push(Number.MAX_SAFE_INTEGER);
    }

    insert (val) {
        this.heap.push(val);
        this.upheap(this.heap.length - 1);
    }

    upheap (pos) {
        let tmp = this.heap[pos];
        while (tmp > this.heap[parseInt(pos/2)]) {
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
            if (child < len && this.heap[child] < this.heap[child+1]) child++;
            if(tmp >= this.heap[child]) break;
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


// 최대 수입 스케쥴 (우선순위큐)
function solution (nums) {
    let answer = 0;
    let maxH = new maxHeap ();
    nums.sort((a, b) => b[1] - a[1]);
    let maxd = nums[0][1];
    let i = 0; // 처음 초기화한 뒤에 다시 처음 지점에서 계속 다시 돌아야 한다.

    for (let day = maxd; day >= 1; day--) {
        for (; i < nums.length; i++) {
            if (nums[i][1] < day) break;
            maxH.insert(nums[i][0]);
        }
        if(maxH.size() > 0) {
            answer += maxH.get();
        }
    }
    return answer;
}
console.log(solution([[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]])); // 150
console.log(solution([[50, 2], [40, 2], [20, 1], [10, 1]])); // 90





