// Write a function that checks whether a number is a palindrome (reads the same forwards 
// and backwards).
// (score 2) 
// Examples :  
// ● isPalindrome(121) ➞  true 
// ● isPalindrome(111) ➞  true 
// ● isPalindrome(123) ➞  false 


function isPalindrome(num){

let str = String(num).split("");
  let rev = str.reverse().join("");
  if(num===Number(rev)){
    return true;
  }else{
    return false;
  }
  
}

console.log(isPalindrome(121) );

console.log(isPalindrome(111));

console.log(isPalindrome(123));
