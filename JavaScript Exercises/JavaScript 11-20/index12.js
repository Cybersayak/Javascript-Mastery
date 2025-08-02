// Write a function filterArray that takes an array and a callback function, 
// and returns a new array with elements that pass the test implemented by the callback.

// Solution:

function filterArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); 
// Output: [3, 4, 5]