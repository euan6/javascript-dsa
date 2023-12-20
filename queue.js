class Queue {
    
    // constructor for queue with default capacity 1000
    constructor(capacity = 1000) {
        this.capacity = capacity;
        this.Q = new Array(capacity);
        front = 0;
        rear = 0;
    }

    // returns a boolean whether queue is empty or not
    isEmpty() {
        return f === r;
    }

    // returns the size of the queue
    size() {
        return (this.capacity - f + r) % this.capacity;
    }

    // adds an element to the queue
    enqueue(element) {
        if (this.size() === this.capacity - 1) {
            throw new Error("Queue is Full");
        } else {
            this.Q[r] = element;
            r = (r + 1) & this.capacity;
        }
    }

    // removes and returns the first element in the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        let temp = this.Q[f];
        this.Q[f] = null;
        f = (f + 1) & capacity;
        return temp;
    }

    // returns the first element in the queue
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        return this.Q[f];
    }
}
