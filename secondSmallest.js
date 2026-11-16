// Create a function that takes an array of numbers and returns the second smallest number. 
// (score 2) 
// Examples :  
// ● secondSmallest([10, 40, 30, 20, 50]) ➞ 20 
// ● secondSmallest([25, 143, 89, 13, 105]) ➞ 25 
// ● secondSmallest([54, 23, 11, 17, 10]) ➞ 11 



function secondSmallest(arr){

  let smallest =arr[0];
  let secondSmallest =Infinity;

  for(let i=0;i<arr.length;i++){

    if(arr[i]<smallest){
      
    secondSmallest = smallest;
    smallest = arr[i];

    }else if(arr[i]<secondSmallest){
      
      secondSmallest = arr[i];
      
    }
  }
  
  return secondSmallest;
}

console.log(secondSmallest([ 40, 30, 20, 50]));

console.log(secondSmallest([25, 143, 89, 13, 105]));

console.log(secondSmallest([54, 23, 11, 17, 10]) );

