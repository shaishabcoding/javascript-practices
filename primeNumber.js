/**Time: 9:25pm; Date: 30/12/2023 */
const
  isPrimeNumber = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
      if (num % i === 0) return false;
    return true;
  },
  primeNumber = (from, to) => {
    let arr = [];
    for (let i = from; i <= to; i++)
      if (isPrimeNumber(i))
        arr.push(i);
    return arr;
  };

console.log(`Prime number from 1 to 100 are ${primeNumber(1, 97)}`);