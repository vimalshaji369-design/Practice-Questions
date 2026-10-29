//  Create a function to return the amount of potatoes there are in a string.(score 3) 
//  Examples :  
//  ● potatoes("potato") ➞ 1 
//  ● potatoes("potatopotato") ➞ 2 
//  ● potatoes("potatoapple") ➞ 1 




function potatoes(count){
  
  total =0;
  
  for(let i=0;i<count.length;i++){
    if(count.slice(i,i+6)==="potato"){
      total ++;
      i += total;
    }
    
  }
  return total;
}

console.log(potatoes("potato"));

console.log(potatoes("potatopotato") );

console.log(potatoes("potatoapple"));