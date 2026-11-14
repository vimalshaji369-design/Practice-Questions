// Create a function that accepts an object and returns an array of keys whose values are even 
// numbers.
// (score 3) 
// Examples :  
// ● evenKeys({ a: 2, b: 5, c: 8 }) ➞ ["a", "c"] 
// ● evenKeys({ x: 11, y: 13 }) ➞ [] 
// ● evenKeys({ j: 12, k: 13 , z:100 }) ➞ [“j”, “z”] 




function evenKeys(key){
  let result =[];
  let obj = Object.keys(key);
      obj.forEach((keys)=>{
             key[keys];
         if(key[keys]%2===0){
      result.push(keys);
  }
  
  })
   return result;
}
console.log(evenKeys({ a: 2, b: 5, c: 8 }) );

console.log(evenKeys({ x: 11, y: 13 }) );

console.log(evenKeys({ j: 12, k: 13 , z:100 }));
