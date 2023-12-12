// recursive fibonacci function
function fibonacci(n) {
    if (n === 0) 
        return n;
    else if (n === 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}
// displays the first 10 numbers in the sequence
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

// recursive sum function
function sum(n) {
    if (n === 0)
        return n;
    else
        return n + sum(n - 1);
}
// displays the sum of all numbers up to and including 10
for (let i = 1; i <= 10; i++) {
    console.log(sum(i));
}

// recursive factorial function
function factorial(n) {
    if (n === 0) 
        return 1;
    else
        return n * factorial(n - 1);
}
// displays the factorials of numbers 1 - 10
for (let i = 1; i < 10; i++) {
    console.log(factorial(i));
}

// recursive power function
function power(n, x) {
    if (x === 0)
        return 1;
    else if ( x === 1)
        return n;
    else
        return n * power(n, x - 1);
}