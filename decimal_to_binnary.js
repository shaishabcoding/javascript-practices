/**
 * const toBinary = decimalNum => decimalNum.toString(2);
 */
function toBinnary(decimalNum) {
  let result = "";
  while (decimalNum > 0) {
    result = decimalNum % 2 + result;
    decimalNum = Math.floor(decimalNum / 2);
  }
  return result;
}

console.log(toBinnary(6));