class Queue {
    
    constructor(capacity = 1000) {
        this.capacity = capacity;
        this.Q = new Array(capacity);
        front = 0;
        rear = 0;
    }

    isEmpty() {
        return f === r;
    }

    size() {
        return (this.capacity - f + r) % this.capacity;
    }

    enqueue(element) {
        if (this.size() === this.capacity - 1) {
            throw new Error("Queue is Full");
        } else {
            this.Q[r] = element;
            r = (r + 1) & this.capacity;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        let temp = this.Q[f];
        this.Q[f] = null;
        f = (f + 1) & capacity;
        return temp;
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        return this.Q[f];
    }
}
