// STRING MANIPULATION FUNCTIONS 

// reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // ➞ "ollelo"
console.log(reverseString("world")); // ➞ "dlrow"

// count characters

function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello")); // ➞ 5
console.log(countCharacters("world")); // ➞ 5

// capitalize characters

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // ➞ "Hello World"
console.log(capitalizeWords("this is a test")); // ➞ "This Is A Test"



// ARRAY FUNCTIONS

// find maximum number in an array 
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // ➞ 5
console.log(findMax([-1, -2, -3, -4, -5])); // ➞ -1

// find minimum value in array
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 4, 5])); // ➞ 1
console.log(findMin([-1, -2, -3, -4, -5])); // ➞ -5

// sum  of array 
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // ➞ 15
console.log(sumArray([-1, -2, -3, -4, -5])); // ➞ -15

// filter array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}
console.log(filterArray([1, 2, 3, 4, 5], x => x > 3)); // ➞ [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], x => x % 2 === 0)); // ➞ [2, 4]


// MATHEMATICAL FUNCTIONS 

// factorial
function factorial(num) {
    if (num < 0) return undefined; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // ➞ 120
console.log(factorial(0)); // ➞ 1


// Recursive approach
function factorial(num) {
    if (num < 0) return undefined; // Factorial is not defined for negative numbers
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Example usage:
console.log(factorial(5)); // ➞ 120
console.log(factorial(0)); // ➞ 1

// prime nuumbers check 
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(7)); // ➞ true
console.log(isPrime(4)); // ➞ false

// fibonacci sequence 

function fibonacci(n) {
    if (n <= 0) return []; // Return an empty array for non-positive numbers
    if (n === 1) return [0]; // The first term of the Fibonacci sequence is 0
    if (n === 2) return [0, 1]; // The first two terms of the Fibonacci sequence are 0 and 1

    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

// Example usage:
console.log(fibonacci(5)); // ➞ [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // ➞ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


