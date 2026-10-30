// Create a function that takes the age in years and returns the age in hours.(score 2) 
// Examples :  
// ● calcAge(65) ➞ 568200 
// ● calcAge(0) ➞ 0
// ● calcAge(20) ➞ 175746 



function calcAge(age){
 let year = 365;
  let hour = 24;
  return age * year * hour;
  
}

console.log(calcAge(65));

console.log(calcAge(0) );

console.log(calcAge(20) );
