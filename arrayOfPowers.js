// Create a function that takes two numbers as arguments (num, length) and returns an array of 
// powers of num until the array length reaches length.(Score 3)  
// Example:  
// ● arrayOfPowers(2, 5) ➞ [2, 4, 8, 16, 32]  
// ● arrayOfPowers(3, 4) ➞ [3, 9, 27, 81]  
// ● arrayOfPowers(5, 3) ➞ [5, 25, 125] 



function  arrayOfPowers(num,length){
  
sum =[];
    for(let i=1;i<=length;i++){
      sum.push(num ** i);
    }

  return sum;
}

console.log( arrayOfPowers(2, 5));

console.log(arrayOfPowers(3, 4));

console.log(arrayOfPowers(5, 3));
