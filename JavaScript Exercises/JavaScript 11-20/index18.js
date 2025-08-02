// Create a memoize function that caches previous results to improve performance.

// Solution:

function memoize(fn) {
    let cache = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    };
}

const factorial = memoize(n => (n === 0 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Cached result