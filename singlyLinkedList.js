class Node {

    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    getValue() {
        return this.value;
    }

    setValue(x) {
        value = x;
    }

    getNextNode() {
        return this.nextNode;
    }

    setNextNode(node) {
        this.nextNode = node;
    }

    addNodeAtTail(node) {
        if (this.nextNode === null) {
            this.nextNode = node;
        } else {
            this.nextNode.addNodeAtTail(node);
        }
    }

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

    constructor() {
        this.headNode = null;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current !== null) {
            count++;
            current = current.getNextNode();
        }
        return count;
    }

    addAtHead(index) {
        let newNode = new Node(index);
        newNode.setNextNode(this.headNode);
        this.headNode = newNode;
    }

    addAtTail(index) {
        let newNode = new Node(index);
        if (this.headNode === null) {
            this.headNode = newNode;
        } else {
            this.headNode.addNodeAtTail(newNode);
        }
    }

    removeAtHead() {
        if (this.headNode === null) {
            return -1;
        } else {
            let returnedNode = this.headNode;
            this.headNode = this.headNode.getNextNode();
            return returnedNode.getValue();
        }
    }

    removeAtTail() {
        if (this.headNode === null) {
            return -1;
        } else {
            let returnedNode = new Node(-1);
            this.headNode = this.headNode.getNextNode();
            return returnedNode.getValue();
        }
    }

    insertMiddle(index) {
        let newNode = new Node(index);
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
}

try {
    const sll = new SLinkedList();
    sll.addAtHead(5);
    sll.addAtHead(4);
    sll.addAtTail(7);
    console.log(sll.size());
    sll.insertMiddle(8);
    console.log(sll.size());
    sll.removeAtHead();
    sll.removeAtTail();
    console.log(sll.size());
} catch (err) {
    // catches any exceptions
    console.error("Error: ", err.message);
}