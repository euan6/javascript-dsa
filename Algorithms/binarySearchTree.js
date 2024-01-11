class BSTNode {

    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    getLeftChild() {
        return this.leftChild;
    }

    getRightChild() {
        return this.rightChild;
    }

    setLeftChild(node) {
        this.leftChild = node;
    }

    setRightChild(node) {
        this.rightChild = node;
    }

    getValue() {
        return this.value;
    }

}
