// Convert asyncOperation into a Promise-based function.

// Solution:

function asyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

asyncOperation().then(data => console.log(data)); // Output after 2s: "Data loaded"