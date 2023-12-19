class Node {

    // constructor for node with a value
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    // returns the value of the node
    getValue() {
        return this.value;
    }

    // sets the value of the node
    setValue(x) {
        this.value = x;
    }

    // returns the next node
    getNextNode() {
        return this.nextNode;
    }

    // sets the next node
    setNextNode(node) {
        this.nextNode = node;
    }

    // adds node at the tail
    addNodeAtTail(node) {
        if (this.nextNode === null) {
            this.nextNode = node;
        } else {
            this.nextNode.addNodeAtTail(node);
        }
    }

    // removes node at the tail
    removeNodeAtTail(node) {
        if (this.nextNode === null) {
            node.setValue(this.getValue());
            return null;
        } else {
            this.nextNode = this.nextNode.removeNodeAtTail(node);
            return this;
        }
    }
}

class SLinkedList {

    // constructor for node with no elements
    constructor() {
        this.headNode = null;
    }

    // returns the size of the singly linked list
    size() {
        let count = 0;
        let current = this.headNode;
        while (current !== null) {
            count++;
            current = current.getNextNode();
        }
        return count;
    }

    // adds an element at the head of the singly linked list
    addAtHead(value) {
        let newNode = new Node(value);
        newNode.setNextNode(this.headNode);
        this.headNode = newNode;
    }

    // adds an element at the tail of the singly linked list
    addAtTail(value) {
        let newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
        } else {
            this.headNode.addNodeAtTail(newNode);
        }
    }

    // removes an element at the head of the singly linked list
    removeAtHead() {
        if (this.headNode === null) {
            return -1;
        } else {
            let returnedNode = this.headNode;
            this.headNode = this.headNode.getNextNode();
            return returnedNode.getValue();
        }
    }

    // removes an element at the tail of the singly linked list
    removeAtTail() {
        if (this.headNode === null) {
            return -1;
        } else {
            let returnedNode = new Node(-1);
            this.headNode = this.headNode.getNextNode();
            return returnedNode.getValue();
        }
    }

    // adds an element in the middle of the singly linked list
    insertMiddle(value) {
        let newNode = new Node(value);
        let middle = this.size() / 2;
        let priorNode = null;
        let current = this.headNode;
        for (let i = 0; i < middle; i++) {
            priorNode = current;
            current = current.getNextNode();
        }
        if (this.headNode === null) {
            this.headNode = newNode;
        } else {
            newNode.setNextNode(current);
            if (priorNode !== null) {
                priorNode.setNextNode(newNode);
            } else {
                this.headNode = newNode;
            }
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

try {
    // creates a new singly linked list
    const sll = new SLinkedList();
    // adds 2 elements at the head and 1 at the tail
    sll.addAtHead(5);
    sll.addAtHead(4);
    sll.addAtTail(7);
    // displays all the elements in the list
    sll.printList();
    // displays the size
    console.log("size: " + sll.size());
    // adds an element to the middle
    sll.insertMiddle(8);
    // displays the size
    console.log("size: " + sll.size());
    // removes the head element and the tail element
    sll.removeAtHead();
    sll.removeAtTail();
    // displays the size
    console.log("size: " + sll.size());
} catch (err) {
    // catches any exceptions
    console.error("Error: ", err.message);
}
