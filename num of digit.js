// Write a function that accepts a number and returns the sum of its digits.
// (score 2) Examples :  
// ● sumDigits(1234) ➞ 10    
// ● sumDigits(0) ➞ 0 
// ● sumDigits(99) ➞ 18




function sumDigits(num){
 let number=0;
let str = String(num);
  for(i=0;i<str.length;i++){
    number += Number(str[i]);
  }
  return number;
}

console.log(sumDigits(1234));
console.log(sumDigits(0));
console.log(sumDigits(99));