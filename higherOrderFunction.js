// Higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
  const arr = [4, 5, 6, 7, 8];
  callback(arr);
}

// Callback function passed to the higher-order function
function printArray(arr) {
  console.log(arr);
}

// Call the higher-order function and pass the callback function as an argument
higherOrderFunction(printArray);
