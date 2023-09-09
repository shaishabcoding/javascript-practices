const arr1 = [4, 6, 3, 35, 63];
const arr2 = [3, 8, 2, 7, 2, 7];

const arr3 = [...arr1, ...arr2]; //arr1.concat(arr2)
console.log(arr3); //output: [4, 6, 3, 35, 63, 3, 8, 2, 7, 2, 7]
