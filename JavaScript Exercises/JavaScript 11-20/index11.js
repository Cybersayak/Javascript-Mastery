
// Write a function `multiplyBy` that takes a number `n` and returns another function that multiplies its input by `n`.

// Solution:

function multiplyBy(n) {
    return function (x) {
        return x * n;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
