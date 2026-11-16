function isPalindrome(word){
    
let str = word.split("");

  let rev = str.reverse().join("");

  if(word===rev){

    return true;
    
  }else{

    return false;

  }
 
}
 console.log(isPalindrome("madam"));
 
 
console.log(isPalindrome("hello"));  


console.log(isPalindrome("level"));