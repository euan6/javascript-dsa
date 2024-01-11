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

class BinarySearchTree {

    constructor() {
        this.rootNode = null;
    }

    isEmpty() {
        return this.rootNode === null;
    }

    size() {
        if (this.rootNode === null) {
            return 0;
        } else {
            return this.rootNode.numberOfNodes();
        }
    }

    insert(value) {
        if (this.rootNode === null) {
            this.rootNode = new BSTNode(value);
        } else {
            this.rootNode.insert(new BSTNode(value));
        }
    }

    delete(value) {
        if (!this.rootNode === null) {
            this.rootNode = this.rootNode.delete(value);
        }
    }

    search(value) {
        if (this.rootNode !== null) {
            return this.rootNode.search(value);
        } else {
            return false;
        }
    }
}
