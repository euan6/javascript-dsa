// merge sort of an array in ascending order
function mergeSortAscending(arr) {
    let arrLength = arr.length;
    if (arrLength < 2) {
        return arr;
    } else {
        let halfSize = Math.floor(arrLength / 2);
        let left = [];
        let right = [];
        let index = 0;
        while (index < halfSize) {
            left[index] = arr[index];
            index++;
        }
        index = 0;
        while (index < arrLength) {
            right[index - halfSize] = arr[index];
            index++;
        }
        left = mergeSortAscending(left);
        right = mergeSortAscending(right);
        merge(left, right, arr);
    }
    return arr;
}
// helper function which merges the sub arrays together
function mergeAscending(left, right, arr) {
    let index = 0, leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            arr[index] = left[leftIndex];
            leftIndex++;
        } else {
            arr[index] = right[rightIndex];
            rightIndex++;
        }
        index++;
    }
    while (leftIndex < left.length) {
        arr[index] = left[leftIndex];
        leftIndex++;
        index++;
    }
    while (rightIndex < right.length) {
        arr[index] = right[rightIndex];
        rightIndex++;
        index++;
    }
}
