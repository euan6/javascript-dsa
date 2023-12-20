class Queue {
    
    // constructor for queue with default capacity 1000
    constructor(capacity = 1000) {
        this.capacity = capacity;
        this.Q = new Array(capacity);
        this.f = 0;
        this.r = 0;
    }

    // returns a boolean whether queue is empty or not
    isEmpty() {
        return this.f === this.r;
    }

    // returns the size of the queue
    size() {
        return (this.capacity + this.r - this.f) % this.capacity;
    }

    // adds an element to the queue
    enqueue(element) {
        if (this.size() === this.capacity) {
            throw new Error("Queue is Full");
        } else {
            this.Q[this.r] = element;
            this.r = (this.r + 1) % this.capacity;
        }
    }

    // removes and returns the first element in the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        let temp = this.Q[this.f];
        this.Q[this.f] = null;
        this.f = (this.f + 1) % this.capacity;
        return temp;
    }

    // returns the first element in the queue
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        return this.Q[this.f];
    }
}

try {
    const q = new Queue(5);
    console.log(q.isEmpty());
    q.enqueue(5);
    q.enqueue(8);
    q.enqueue(2);
    console.log(q.size());
    console.log(q.dequeue());
    console.log(q.size());
    console.log(q.dequeue());
} catch (err) {
    // catches any exceptions
    console.error("Error: ", err.message);
}