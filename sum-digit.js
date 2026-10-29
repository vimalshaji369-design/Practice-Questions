// Write a function that calculates the sum of all digits in a string. (score 3) 
// Examples :  
// ● sumDigits("a1b2c3") ➞ 6   
// ● sumDigits("123ab7c") ➞ 13 
// ● sumDigits("abc") ➞ 0 



function sumDigits(str){

 let sum =0;

  for(let i=0;i<str.length;i++){
     let digit = Number(str[i]);
    
  if(!Number.isNaN(digit)){
     sum += digit;

  }
  
  }
  

  
  return sum;
}

console.log(sumDigits("a1b2c3"));

console.log(sumDigits("123ab7c"));

console.log(sumDigits("abc"));