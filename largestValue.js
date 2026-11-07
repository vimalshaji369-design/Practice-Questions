// Write a function that takes an array of numbers as input and returns the largest value in 
// the array.
//  (score 2)
//   Examples 
//   ● getLargestValue([1, 2, 3, 4, 5]) ➞ 5 
//   ● getLargestValue([10, 25, 7, 3]) ➞ 25 
//   ● getLargestValue([100, 50, 300, 200]) ➞ 300 




function getLargestValue(num){
  let largest = num[0];
  for(let i=0;i<num.length;i++){
    if(num[i] > largest){
      largest=num[i];
    }
  }
  return largest;
}
console.log(getLargestValue([1, 2, 3, 4, 5]))
console.log(getLargestValue([10, 25, 7, 3]) )
console.log(getLargestValue([100, 50, 300, 200]) )