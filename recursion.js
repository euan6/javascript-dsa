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
    console.log(fibonacci(i))
}