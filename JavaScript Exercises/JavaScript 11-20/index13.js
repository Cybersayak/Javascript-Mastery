// Write a function mapArray that takes an array and a callback function, applying the function to each element.

// Solution:

function mapArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

console.log(mapArray([1, 2, 3], num => num * 2)); 
// Output: [2, 4, 6]