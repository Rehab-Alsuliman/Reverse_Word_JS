function FirstReverse(str) { 

  // code goes here  
  // .split -> walk letter letter in string.
  // .reverse -> moved the letter in string like pop and push (STACK).
  // .join -> collect the letter togather to become 1 word.

  
  let result = str.split("").reverse().join("");
  return result; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
