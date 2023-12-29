// bubble sort of an array in ascending order
function bubbleSortAscending(arr) {
    let swaps = true;
    while (swaps) {
        swaps = false;
        for (let i = 0; i < arr.length - 1; i ++) {
            if (arr[i + 1] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaps = true;
            }
        }
    }
    return arr;
}
// displays the sorted array
arrayAsc = [5, 7, 2, 4, 1, 9];
console.log(bubbleSortAscending(arrayAsc));
console.log(isSorted(arrayAsc, "asc"));

// bubble sort of an array in descending order
function bubbleSortDescending(arr) {
    let swaps = true;
    while (swaps) {
        swaps = false;
        for (let i = 0; i < arr.length - 1; i ++) {
            if (arr[i + 1] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaps = true;
            }
        }
    }
    return arr;
}
// displays the sorted array
arrayDesc = [5, 7, 2, 4, 1, 9];
console.log(bubbleSortDescending(arrayDesc));
console.log(isSorted(arrayDesc, "desc"));

// test function which checks if an array is sorted in either ascending or descending order
function isSorted(arr, order) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (order === "asc") {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        } else if (order === "desc") {
            if (arr[i] < arr[i + 1]) {
                return false;
            }
        }
    }
    return true;
}
