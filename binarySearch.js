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
// displays the results when searching for 5 and 11
numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(numbersArr, 5, 0, numbersArr.length - 1));
console.log(binarySearch(numbersArr, 11, 0, numbersArr.length - 1));
