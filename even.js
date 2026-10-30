// Write a function that accepts an array of integers and returns a new array where every even
//  number is replaced with the string "even" while all odd numbers remain unchanged.
//  (score 2) 
//  Examples :  
//  ●  [1, 2, 3, 4, 5]  ➞ [1, "even", 3, "even", 5] 
//  ● [10, 15, 20, 25] ➞ ["even", 15, "even", 25] 
//  ● [1, 3, 5, 7] ➞ [1, 3, 5, 7] 



function arr(...numbers){

let result =[];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            result.push("Even");
        }else{
            result.push(numbers[i]);
        }
    }
   return result; 
}

console.log(arr(1, 2, 3, 4, 5 ));

console.log(arr(10, 15, 20, 25));

console.log(arr(1, 3, 5, 7));