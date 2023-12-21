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

// linear search of an array for a string
function linearSearchString(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
// displays the results when searching for "apple" and "avacado"
stringsArr = ["apple", "banana", "orange", "grapes"];
console.log(linearSearchNumber(stringsArr, "apple"));
console.log(linearSearchNumber(stringsArr, "avacado"));
