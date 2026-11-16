// Create a function that takes an array of numbers and returns the second smallest number. 
// (score 2) Examples :  
// ● secondSmallest([10, 40, 30, 20, 50]) ➞ 20 
// ● secondSmallest([25, 143, 89, 13, 105]) ➞ 25 
// ● secondSmallest([54, 23, 11, 17, 10]) ➞ 11 



function secondSmallest(value){
  let sorted = value.sort((a,b)=>a-b);
  return sorted[1];
}

console.log(secondSmallest([10, 40, 30, 20, 50]));

console.log(secondSmallest([25, 143, 89, 13, 105]));

console.log(secondSmallest([54, 23, 11, 17, 10]));