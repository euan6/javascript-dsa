class BSTNode {

    // constructor for node with a value
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    // returns the left child node
    getLeftChild() {
        return this.leftChild;
    }

    // returns the right child node
    getRightChild() {
        return this.rightChild;
    }

    // sets the left child node
    setLeftChild(node) {
        this.leftChild = node;
    }

    // sets the right child node
    setRightChild(node) {
        this.rightChild = node;
    }

    // returns the value of a node
    getValue() {
        return this.value;
    }

    // inserts a node into the tree
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

    // searches for a node in the tree
    search(value) {
        if (value < this.value) {
            if (this.getLeftChild() !== null) {
                return this.getLeftChild().search(value);
            } else {
                return false;
            }
        } else if (value > this.value) {
            if (this.getRightChild() !== null) {
                return this.getRightChild().search(value);
            } else {
                return false;
            }
        }
        return true;
    }

    // deletes a node in the tree
    delete(value) {
        if (value !== this.value) {
            if (value < this.value && this.getLeftChild() !== null) {
                this.leftChild = this.getLeftChild().delete(value);
                return this;
            } else if (value > this.value && this.getRightChild() !== null) {
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

    // returns the largest value node
    getLargestValueNode() {
        if (this.getRightChild() === null) {
            return this;
        } else {
            return this.getRightChild().getLargestValueNode();
        }
    }

    // returns the number of nodes
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

    // constructor for an empty tree
    constructor() {
        this.rootNode = null;
    }

    // returns a boolean whether tree is empty or not
    isEmpty() {
        return this.rootNode === null;
    }

    // returns the size of the binary search tree
    size() {
        return this.rootNode ? this.rootNode.numberOfNodes() : 0;
    }

    // creates new node and inserts into the tree
    insert(value) {
        if (this.rootNode === null) {
            this.rootNode = new BSTNode(value);
        } else {
            this.rootNode.insert(new BSTNode(value));
        }
    }

    // deletes the node with the input value
    delete(value) {
        if (this.rootNode !== null) {
            this.rootNode = this.rootNode.delete(value);
        }
    }

    // searches for and returns the node with the input value
    search(value) {
        if (this.rootNode !== null) {
            return this.rootNode.search(value);
        } else {
            return false;
        }
    }
}

try {
    // creates a new binary search tree
    const bst = new BinarySearchTree();
    // check if the tree is empty
    console.log(bst.isEmpty());
    // inserts 3 nodes in the tree
    bst.insert(8);
    bst.insert(3);
    bst.insert(7);
    // check if the tree is empty
    console.log(bst.isEmpty());
    // displays the size
    console.log(bst.size());
    // searches for 8 in the tree
    console.log(bst.search(8));
    // searches for 4 in the tree
    console.log(bst.search(4));
    // deletes 8 from the tree
    bst.delete(8);
    // displays the size
    console.log(bst.size());
} catch (err) {
    // catches any exceptions
    console.log("Error: ", err.message);
}
