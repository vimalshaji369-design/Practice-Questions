// Write a function that accepts a number and checks whether the number is a palindrome or not.
// (score 2)
//  A number is called a palindrome if it reads the same backward as forward. Examples :  
 
//  ● isPalindromeNumber(121) ➞ true   
 
//  ● isPalindromeNumber(123) ➞ false   
 
//  ● isPalindromeNumber(1331) ➞ true   



function isPalindromeNumber(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

console.log(isPalindromeNumber(121));  
console.log(isPalindromeNumber(123));  
console.log(isPalindromeNumber(1331)); 