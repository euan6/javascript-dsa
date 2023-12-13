class Stack {

    constructor(size = 1000) {
        this.capacity = size;
        this.S = new Array(size)
        this.topElement = -1;
    }

    isEmpty() {
        return this.topElement < 0;
    }

    size() {
        return this.topElement + 1
    }

    push(element) {
        if (this.size() === this.capacity) {
            throw new Error("Stack is Full");
        }
        this.S[++this.topElement] = element;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.S[this.topElement--];
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.S[this.topElement];
    }
}
