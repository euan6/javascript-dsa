
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
