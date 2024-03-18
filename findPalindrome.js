// const findPalindrome = (str) => (str === str.split('').reverse().join('')); //shortcut 

function findPalindrome(str){
  let tampStr = "";
  for(let i = str.length; i > 0;){
    tampStr += str[--i];
  }
  return tampStr === str;
}

console.log(findPalindrome("madam"))
console.log(findPalindrome("mom"))