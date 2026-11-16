// Create a function that takes an array of numbers and returns the second largest number. 
// ( score 2 ) 
// Examples :
// ● secondLargest([10, 40, 30, 20, 50]) ➞ 40 
// ● secondLargest([25, 143, 89, 13, 105]) ➞ 105 
// ● secondLargest([54, 23, 11, 17, 10]) ➞ 23 



function secondLargest(arr){
  let secondLargest =0;
  let largest = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      secondLargest = largest;
      largest = arr[i];
    }else if( arr[i] > secondLargest){
      secondLargest = arr[i];
    }
  }
return secondLargest;
  
}

console.log(secondLargest([10, 40, 30, 20, 50]));

console.log(secondLargest([25, 143, 89, 13, 105]));

console.log(secondLargest([54, 23, 11, 17, 10]));
