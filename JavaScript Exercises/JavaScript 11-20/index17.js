// Write a function counter that returns a function that increments a counter variable.

// Solution:
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2