// Create a throttle function that ensures a function executes at most once in delay milliseconds.

function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

const logMessage = throttle(() => console.log("Throttled!"), 2000);
logMessage();
