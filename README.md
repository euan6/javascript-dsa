# javascript-dsa

In this repository I will be creating several different data structures & algorithms using JavaScript. These will be entirely experimental and just for practice to give myself a challenge.

## Algorithms

### Recursion 🔁

The first programming concept I have implemented is recursion. I had made a series of small, common problems which can be easily solved using recursion, such as the fibonacci sequence, calculating factorials and summing up an array.

### Linear Search 🔎

Linear search is the first searching algorithm which I have implemented. It is very basic as all it does is iterate through an array of with numbers or strings, and check each element to see if it matches the target value. It then returns true if it is found, else false if it is not found.

### Binary Search 🔍

Binary Search is similar to linear search in the way that they are both searching algorithms, however it has a different approach. For binary search to work, the input array or list must be sorted. The algorithm first checks if the target is the middle number, and if not recursively checks either the top or bottom part of the array or list before returning true if the target is found, else false if it is not.

### Bubble Sort 🫧

Bubble sort is the first sorting algorithm which I have implemented. It is fairly simple to understand and write, except this means that it is not the most efficient sorting algorithm. the basic rule is that if the next number in the array is smaller, they swap and it keeps swapping until in position. This happens until each number is in the correct position.

### Insertion Sort 📲

Insertion Sort is another sorting algorithm, again fairly simple to implement and understand. It takes the unsorted element and puts it into position in the sorted part of the array. it then finds the next unsorted element and does the same until every element is sorted in position.

### Merge Sort 🔗

The next sorting algorithm I have implemented is merge sort. This is a divide and conquer algorithm which means it splits the unsorted array into smaller sub arrays, it then sorts these smaller arrays and then joins them back together in the sorted order.

## Data Structures

### Stack 📚

The first data structure which I have implemented is a stack. A stack is a very simple LIFO structure, meaning the first element pushed to a stack is the last element popped from it. I have given the stack several methods such as: isEmpty(), size(), push(), pop() and top().

### Singly Linked List 📋

The next data structure i created was a singly linked list. This is again a simple structure, with an element in the list having a value and then a reference to its next node. This means that each time an element is added or removed its reference node needs to be updated. Some of the methods it can use are: size(), addAtHead(), addAtTail(), removeAtHead(), removeAtTail(), insertMiddle() and printList().

### Doubly Linked List ⛓️

Similar to the singly linked list, except this data structure has a reference node to its previous and next element, meaning both of these need updated each time an element is added or removed. Again this has similar methods and the singly linked list such as: size(), getHeadValue(), getTailValue(), addAtHead(), addAtTail(), removeAtHead(), removeAtTail() and printList().

### Queue 👥

The queue is again a fairly simple data structure. It has a FIFO structure meaning the first element added is the first one to be removed. Elements enter the rear of the queue and are dequeued from the front. The queue uses methods such as isEmpty(), size(), enqueue(), dequeue() and front().

### Priority Queue 🥇

Similar to the queue, the priority queue is a data structure that organizes elements in a linear fashion. The difference from a normal queue is that it assigns a priority value to each element which means higher priority elements are removed before lower ones. It uses methods such as isEmpty(), size(), min(), removeMin() and insert(), but also has helper methods such as findMin(), swap(), downHeap() and upHeap().

### Binary Search Tree

The binary search tree is a unique data structure which stores elements in order of value, with larger values going down the right subtree and smaller values to the left. The tree is made up of roots and leaves with branches being related by their values. The binary search tree uses methods such as isEmpty(), size(), insert(), search() and delete(), but also uses helper methods like getLargestNodeValue() and numberOfNodes().