// insertion sort of an array in ascending order
function insertionSortAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j--];
            arr[j + 1] = current;
        }
    }
    return arr;
}
// displays the sorted array
arrayAsc = [5, 7, 2, 4, 1, 9];
console.log(insertionSortAscending(arrayAsc));
