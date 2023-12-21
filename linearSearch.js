// linear search of an array for a number
function linearSearchNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
// displays the result when searching for 5 and 8
numbersArr = [1, 2, 3, 4, 5];
console.log(linearSearchNumber(numbersArr, 5));
console.log(linearSearchNumber(numbersArr, 8));
