// Create a function that will remove the letters "a", "b", and "c" from the given string and
// return the modified version. If the given string does not contain "a", "b", or "c", return
// null. ( score 3 ) 
// Examples :  
// ● removeABC("This might be a bit hard") ➞ "This might e  ithrd" 
// ● removeABC("hello world!") ➞ null 
// ● removeABC("") ➞ null 



function removeABC(ltr){
 if(!/[ABCabc]/gi.test(ltr)){
   return null;
 }
  return ltr.replace(/[ABCabc]/gi,"");
}

console.log(removeABC("This might be a bit hard"));

console.log(removeABC("hello world!"));

console.log(removeABC(""));