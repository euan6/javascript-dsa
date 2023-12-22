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
