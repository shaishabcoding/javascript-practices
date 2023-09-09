fetch("https://shaishabcoding.github.io/javascript-practices/simpleText.txt")
  .then((response) => response.text())
  .then((data) => {
    // Do something with the data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });
