// Create a function which accepts a number and returns "In range" if the number is between 10 and 50 (inclusive), otherwise return "Out of range". 
// Example  
// ●  Input : 25 → Output : “In range” 
// ●  Input : 5 → Output : “Out of range” 
// ●  Input : 11 → Output : “In range” 



function range(output){
  if(output<10){
    return "out of range";
  }else if(output >10 && 50){
    return "in range";
  }
}
console.log(range(25));
console.log(range(5));
console.log(range(11));