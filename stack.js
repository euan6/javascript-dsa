class Stack {

    // constructor for stack with default size 1000
    constructor(size = 1000) {
        this.capacity = size;
        this.S = new Array(size)
        this.topElement = -1;
    }

    // returns a boolean whether stack is empty or not
    isEmpty() {
        return this.topElement < 0;
    }

    // returns the size of the stack
    size() {
        return this.topElement + 1
    }

    // adds an element to the stack
    push(element) {
        if (this.size() === this.capacity) {
            throw new Error("Stack is Full");
        }
        this.S[++this.topElement] = element;
    }

    // removes and returns the top element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.S[this.topElement--];
    }

    // returns the top element from the stack
    top() {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.S[this.topElement];
    }
}

try {
    // creates a new stack and adds 5 elements
    const st = new Stack(5);
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    st.push(5);
    // displays the size
    console.log(st.size());
    // removes and displays the top element
    console.log(st.pop());
    // displays the size
    console.log(st.size());
    // displays the top element
    console.log(st.top());
    // displays if the stack is empty or not
    console.log(st.isEmpty());
} catch (err) {
    // catches any exceptions
    console.error("Error: ", err.message);
}
