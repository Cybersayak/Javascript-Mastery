// Write a function asyncOperation that takes a callback and executes it after 2 seconds.

// Solution:

function asyncOperation(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 2000);
}

asyncOperation(data => console.log(data)); // Output after 2s: "Data loaded"