class Node {

    // constructor for node with a value
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }

    // returns the value of the node
    getValue() {
        return this.value;
    }

    // sets the value of the node
    setValue(x) {
        value = x;
    }

    // returns the next node
    getNextNode() {
        return this.nextNode;
    }

    // sets the next node
    setNextNode(node) {
        this.nextNode = node;
    }

    // returns the previous node
    getPrevNode() {
        return this.prevNode;
    }

    // sets the previous node
    setPrevNode(node) {
        this.prevNode = node;
    }
}

class DLinkedList {

    // constructor for node with no elements
    constructor() {
        this.headNode = null;
        this.tailNode = null;
    }

    // returns the size of the doubly linked list
    size() {
        let count = 0;
        let current = this.headNode;
        while (current !== null) {
            count++;
            current = current.getNextNode();
        }
        return count;
    }

    // returns the head value of the doubly linked list
    getHeadValue() {
        if (this.headNode === null) {
            return null;
        }
        return this.headNode.value;
    }

    // returns the tail value of the doubly linked list
    getTailValue() {
        if (this.tailNode === null) {
            return null;
        }
        return this.tailNode.value;
    }

    // adds an element at the head of the doubly linked list
    addAtHead(value) {
        let newNode = new Node(value);
        newNode.setNextNode(this.headNode);
        if (this.headNode !== null) {
            this.headNode.setPrevNode(newNode);
        }
        this.headNode = newNode;
        if (this.tailNode === null) {
            this.tailNode = newNode;
        }
    }

    // adds an element at the tail of the doubly linked list
    addAtTail(value) {
        let newNode = new Node(value);
        if (this.tailNode === null) {
            this.tailNode = newNode;
            this.headNode = newNode;
        } else {
            newNode.setPrevNode(this.tailNode);
            this.tailNode.setNextNode(newNode);
            this.tailNode = newNode;
        }
    }

    // removes an element at the head of the doubly linked list
    removeAtHead() {
        if (this.headNode === null) {
            this.headNode = null;
            this.tailNode = null;
            return null;
        } else if (this.headNode === this.tailNode) {
            let returnedNode = this.headNode.getValue();
            this.headNode = null;
            this.tailNode = null;
            return returnedNode.getValue();
        } else {
            let returnedNode = this.headNode.getValue();
            this.headNode = this.headNode.getNextNode();
            this.headNode.prevNode = null;
            return returnedNode;
        }
    }

    // removes an element at the tail of the doubly linked list
    removeAtTail() {
        if (this.tailNode === null) {
            this.headNode = null;
            this.tailNode = null;
            return null;
        } else if (this.headNode === this.tailNode) {
            let returnedNode = this.tailNode.getValue();
            this.headNode = null;
            this.tailNode = null;
            return returnedNode.getValue();
        } else {
            let returnedNode = this.tailNode.getValue();
            this.tailNode = this.tailNode.getPrevNode();
            this.tailNode.setNextNode() = null;
            return returnedNode;
        }
    }

    // prints all the elements in the list
    printList() {
        let current = this.headNode;
        for (let i = 1; current !== null; i++) {
            if (current !== null) {
                console.log(i + ": " + current.getValue());
                current = current.getNextNode();
            }
        }
        
    }
}
