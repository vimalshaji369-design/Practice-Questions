// Create a function that accepts an object and returns the sum of the lengths of all string 
// values.(score 3) 
// Examples :  

// ● totalStringLength({ name: "John", city: "Paris" }) ➞ 9 

// ● totalStringLength({ a: "hi", b: "world" }) ➞ 7 

// ● totalStringLength({ Success : "false", status: "404" }) ➞ 8 




function totalStringLength(obj){

  let sum = 0;
  let value = Object.values(obj);

  for(let i = 0;i<value.length;i++){
       sum += value[i].length;
  }
return sum;
   
  
}

console.log(totalStringLength({ name: "John", city: "Paris" }) );

console.log(totalStringLength({ a: "hi", b: "world" }));

console.log(totalStringLength({ Success : "false", status: "404" }));


