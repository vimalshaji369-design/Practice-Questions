// Write a function that accepts an array of integers and returns the difference between the 
// sum of the squares of even numbers and the sum of the squares of odd numbers in the array. 
// (score 3) 
// Examples :  
// ● diffSquares([1, 2, 3, 4]) ➞ 10 
// ● diffSquares([5, 6, 7]) ➞ 38 
// ● diffSquares([2, 4, 6]) ➞ 56 




function diffSquares(sqr){

  let even=0;
  let odd =0;

  for(let i=0;i<sqr.length;i++){
    if(sqr[i]%2==0){
      even += sqr[i]*sqr[i];
    }else if(sqr[i]%2!==0){
     odd += sqr[i]*sqr[i];
    }
  }
  return Math.abs(even - odd );
   
}

console.log(diffSquares([1, 2, 3, 4]) );

console.log(diffSquares([5, 6, 7]));

console.log(diffSquares([2, 4, 6]));


