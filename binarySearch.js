// binary search of an array for a number
function binarySearch(arr, target, first, last) {
    if (first > last) {
        return false;
    }
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) {
        return true;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, last);
    } else {
        return binarySearch(arr, target, first, mid - 1);
    }
}
