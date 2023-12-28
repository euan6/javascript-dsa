class PriorityQueue {

    // constructor for a priority queue with default capacity 1000
    constructor(capacity = 1000) {
        this.heap = new Array(capacity + 1);
        this.last = 0;
    }

    // returns a boolean whether priority queue is empty or not
    isEmpty() {
        return this.last === 0;
    }

    // returns the size of the priority queue
    size() {
        return this.last;
    }

    // returns the smallest value in the priority queue (highest priority)
    min() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is Empty");
        }
        return this.heap[1];
    }

    // removes and returns the smallest value in the priority queue (highest priority)
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

    // adds an element to the priority queue
    insert(element) {
        if (this.last === this.heap.length - 1) {
            throw new Error("Priority Queue is Full");
        }
        this.last++;
        this.heap[this.last] = element;
        this.upHeap();
    }

    // helper method which returns the index of the smallest child given a parent node
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

    // helper method which swaps 2 elements in the heap array
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    // down heap method which updates the priority queue order when removing the smallest value element
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

    // up heap method which updates the priority queue order when inserting an element
    upHeap() {
        let current = this.last;
        while (current > 1 && this.heap[current] < this.heap[Math.floor(current / 2)]) {
            this.swap(current, Math.floor(current / 2));
            current = Math.floor(current / 2);
        }
    }

}

try {
    const pq = new PriorityQueue(5);
    console.log(pq.isEmpty());
    pq.insert(4);
    pq.insert(2);
    pq.insert(7);
    pq.insert(1);
    pq.insert(8);
    console.log(pq.size());
    console.log(pq.min());
    console.log(pq.removeMin());
    console.log(pq.size());
    console.log(pq.min());
    console.log(pq.isEmpty());
} catch (err) {
    console.error("Error: ", err.message);
}
