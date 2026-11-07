//  Create a function fizzBuzz(n) that accepts a number n and returns a string array following 
//  these 
//  rules: 
//  ● "FizzBuzz" if the number is divisible by both 3 and 5. 
//  ● "Fizz" if the number is divisible by only 3. 
//  ● "Buzz" if the number is divisible by only 5. 
//  ● The number itself if none of the above conditions are true.  
//  (score 3) 
//  Examples :  
//  ● Input : fizzBuzz(3) Output : ["1","2","Fizz"] 
//  ● Input: fizzBuzz(5) Output: ["1","2","Fizz","4","Buzz"] 
//  ● Input: fizzBuzz(15) Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"   "11","Fizz","13","14","FizzBuzz"] 




function FizzBuzz(num){
  
let result =[];
  
  for(let i=1 ; i<= num;i++){
    
    if(i%3===0  && i%5===0){
        result.push("FizzBuzz");
    }else if(i%3===0){
        result.push("Fizz");
}else if(i%5===0){
      result.push("Buzz");
}else{
 result.push(String(i));     
}
    
  }
  return result;
  
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));
