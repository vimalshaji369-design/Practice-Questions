// Write a function that takes an integer as input and returns the sum of its digits.
//  (score 2).
 
//  Examples :  
 
//  ● sum(121) ➞ 4 
 
//  ● sum(987) ➞ 24 
 
//  ● sum(505) ➞ 10 


function sum(num){

  let total =0;
    let Num = String(num);
  for(let i=0;i<Num.length;i++){
   total +=Number(Num[i]);
  }
  return total;
}
console.log(sum(121));

console.log(sum(987));

console.log(sum(505));