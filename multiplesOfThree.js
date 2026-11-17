//  Write a function that takes an array of numbers as input and returns the sum of array 
//  elements which are multiples of 3. (Score 2)  
//  Examples:  
//  ● getSum([1, 3, 8, 5, 9]) ➞ 12  
//  ● getSum([1, 2, 3, 4, 5]) ➞ 3  
//  ● getSum([27, 15, 7, 1, 4]) ➞ 42  



function  getSum(sum){
let value = 0;
  for(i=0;i<sum.length;i++){
    if(sum[i]% 3 === 0){
      value += sum[i];
    }
  }
  return value;
}
console.log( getSum([1, 3, 8, 5, 9]));

console.log(getSum([1, 2, 3, 4, 5]));

console.log( getSum([27, 15, 7, 1, 4]));