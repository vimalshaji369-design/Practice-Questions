// Create a function that takes an array of strings and returns the words that are equal or 
// more than four letters. 

// Examples: 

// ● lengthCheck(["Tomato", "Pair", "Air"]) ➞ ["Tomato", "Pair"]  

// ● lengthCheck(["Rat", "Bear", "Fox"]) ➞ ["Bear"] 



function lengthCheck(arr){

  let total =[];
  for(let i=0;i<arr.length;i++){
   if(arr[i].length >=4){
     total.push(arr[i])
   }
  }
  return total;
}

console.log(lengthCheck(["Tomato", "Pair", "Air"]));

console.log(lengthCheck(["Rat", "Bear", "Fox"]) );
