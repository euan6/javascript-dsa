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

    insert(node) {
        if (node.value < this.value) {
            if (this.getLeftChild() !== null) {
                this.getLeftChild().insert(node);
            } else {
                this.setLeftChild(node);
            }
        } else if (node.value > this.value) {
            if (this.getRightChild() !== null) {
                this.getRightChild().insert(node);
            } else {
                this.setRightChild(node);
            }
        } else {
            return;
        }
    }

    search(value) {
        if (value < this.value) {
            if (this.getLeftChild() !== null) {
                return this.getLeftChild().search(value);
            } else {
                return false;
            }
        } else if (v > this.value) {
            if (this.getRightChild() !== null) {
                return this.getRightChild().search(value);
            } else {
                return false;
            }
        }
        return true;
    }

    delete(value) {
        if (value !== this.value) {
            if (v < this.value && this.getLeftChild() !== null) {
                this.leftChild = this.getLeftChild().delete(value);
                return this;
            } else if (v > this.value && this.getRightChild() !== null) {
                this.rightChild = this.getRightChild().delete(value);
                return this;
            } else {
                return this;
            }
        } else {
            if (this.getLeftChild() !== null && this.getRightChild() !== null) {
                let largestLeft = this.getLeftChild().getLargestValueNode();
                this.value = largestLeft.getValue();
                this.leftChild = this.getLeftChild().delete(largestLeft.getValue());
                return this;
            } else if (this.getLeftChild !== null) {
                return this.getLeftChild();
            } else if (this.getRightChild() !== null) {
                return this.getRightChild();
            } else {
                return null;
            }
        }
    }

    getLargestValueNode() {
        if (this.getRightChild() === null) {
            return this;
        } else {
            return this.getRightChild().getLargestValueNode();
        }
    }

    numberOfNodes() {
        let valueToReturn = 1;
        if (this.leftChild !== null) {
            valueToReturn += this.leftChild.numberOfNodes();
        }
        if (this.rightChild !== null) {
            valueToReturn += this.rightChild.numberOfNodes();
        }
        return valueToReturn;
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
