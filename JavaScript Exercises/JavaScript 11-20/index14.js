// Write a function reduceArray that takes an array, a reducer function, and an initial value.
// Solution

function reduceArray(arr, reducer, initialValue) {
    let accumulator = initialValue;
    for (let item of arr) {
        accumulator = reducer(accumulator, item);
    }
    return accumulator;
}

console.log(reduceArray([1, 2, 3, 4], (acc, num) => acc + num, 0)); 
// Output: 10