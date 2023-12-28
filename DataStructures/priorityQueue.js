class PriorityQueue {

    constructor(capacity = 1000) {
        this.heap = new Array(capacity + 1);
        this.last = 0;
    }

    isEmpty() {
        return this.last === 0;
    }

    size() {
        return this.last;
    }

    min() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is Empty");
        }
        return this.heap[1];
    }

    removeMin() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is Empty");
        }
        let min = this.heap[1];
        this.heap[1] = this.heap[this.last];
        this.last--;
        this.downHeap();
        return min;
    }

    insert(element) {
        if (this.last === this.heap.length - 1) {
            throw new Error("Priority Queue is Full");
        }
        this.last++;
        this.heap[this.last] = element;
        this.upHeap();
    }

    findMin(min) {
        let leftChild = 2 * min;
        let rightChild = 2 * min + 1;
        if (rightChild <= this.last) {
            if (this.heap[leftChild] < this.heap[rightChild]) {
                return leftChild;
            } else {
                return rightChild;
            }
        } else if (leftChild <= this.last) {
            return leftChild;
        } else {
            return -1;
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    downHeap() {
        let current = 1;
        while (current <= Math.floor(this.last / 2)) {
            let smallerChild = this.findMin(current);
            if (this.heap[current] > this.heap[smallerChild]) {
                this.swap(current, smallerChild);
                current = smallerChild;
            } else {
                break;
            }
        }
    }

    upHeap() {
        let current = this.last;
        while (current > 1 && this.heap[current] < this.heap[Math.floor(current / 2)]) {
            this.swap(current, Math.floor(current / 2));
            current = Math.floor(current / 2);
        }
    }

}
