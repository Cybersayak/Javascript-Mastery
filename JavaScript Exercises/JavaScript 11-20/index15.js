// Create a debounce function that delays execution of a function by delay milliseconds.

// Solution 

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const logMessage = debounce(() => console.log("Hello!"), 1000);
logMessage();