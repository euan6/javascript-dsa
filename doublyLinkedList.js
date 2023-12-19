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
