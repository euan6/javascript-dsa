# javascript-dsa

In this repository I will be creating several different data structures & algorithms using JavaScript. These will be entirely experimental and just for practice to give myself a challenge.

## Algorithms

### Recursion 🔁

The first programming concept I have implemented is recursion. I had made a series of small, common problems which can be easily solved using recursion, such as the fibonacci sequence, calculating factorials and summing up an array.

### Linear Search 🔎

Linear search is the first searching algorithm which I have implemented. It is very basic as all it does is iterate through an array of with numbers or strings, and check each element to see if it matches the target value. It then returns true if it is found, else false if it is not found.

### Binary Search 🔍

Binary Search is similar to linear search in the way that they are both searching algorithms, however it has a different approach. For binary search to work, the input array or list must be sorted. The algorithm first checks if the target is the middle number, and if not recursively checks either the top or bottom part of the array or list before returning true if the target is found, else false if it is not.

### Bubble Sort

Bubble sort is the first sorting algorithm which I have implemented. It is fairly simple to understand and write, except this means that it is not the most efficient sorting algorithm. the basic rule is that if the next number in the array is smaller, they swap and it keeps swapping until in position. This happens until each number is in the correct position.

## Data Structures

### Stack 📚

The first data structure which I have implemented is a stack. A stack is a very simple LIFO structure, meaning the first element pushed to a stack is the last element popped from it. I have given the stack several functions such as: isEmpty(), size(), push(), pop() and top().

### Singly Linked List 📋

The next data structure i created was a singly linked list. This is again a simple structure, with an element in the list having a value and then a reference to its next node. This means that each time an element is added or removed its reference node needs to be updated. Some of the functions it can use are: size(), addAtHead(), addAtTail(), removeAtHead(), removeAtTail(), insertMiddle() and printList().

### Doubly Linked List ⛓️

Similar to the singly linked list, except this data structure has a reference node to its previous and next element, meaning both of these need updated each time an element is added or removed. Again this has similar functions and the singly linked list such as: size(), getHeadValue(), getTailValue(), addAtHead(), addAtTail(), removeAtHead(), removeAtTail() and printList().

### Queue 👥

The queue is again a fairly simple data structure. It has a FIFO structure meaning the first element added is the first one to be removed. Elements enter the rear of the queue and are dequeued from the front. The queue uses functions such as isEmpty(), size(), enqueue(), dequeue() and front().