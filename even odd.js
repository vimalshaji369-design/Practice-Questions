//  Write a function that takes a number as input and returns a string based on the following 
//  rules: 
//  (score 2)
//   a. If the number is odd, return "Weird".
//  b. If the number is even and in the range 2 to 5 (inclusive), return "Not Weird". 
//  c. If the number is even and in the range 6 to 20 (inclusive), return "Weird". 
//  d. If the number is even and greater than 20, return "Not Weird".    
//  Examples :  
//  ● weirdCheck(3) ➞ "Weird" 
//  ● weirdCheck(8) ➞ "Weird" 
//  ● weirdCheck(22) ➞ "Not Weird" 




function weirdCheck(even){

  if(even%2 !== 0){
    return "Weird";
  }else if(even%2 == 0 && even>=2 && even<=5){
    return "Not Weird";
  }else if(even%2== 0 && even>=6 && even<=20){
    return "Weird";
  }else if(even%2== 0 && even>20){
    return  "Not Weird";
  }
}

console.log(weirdCheck(3));
console.log(weirdCheck(8));
console.log(weirdCheck(24));