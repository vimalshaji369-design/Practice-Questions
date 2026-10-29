// Create a JavaScript function that accepts a string and returns 
// true if it is a title string, and false otherwise. A title string 
// is defined as a string in which every word starts with an uppercase letter. 
// ( score 3 ) 
// Examples :  
// ● checkTitle("A Mind Boggling Achievement") ➞ true 
// ● checkTitle("A Simple Java Script Program!") ➞ true 
// ● checkTitle("Water is transparent") ➞ false 



function checkTitle(words){
  let title = words.split(" ");
  
for(let i=0;i<title.length;i++){
  
  if(title[i][0]!==title[i][0].toUpperCase()){

    return false;
  }
  
}
return true;
  
}

console.log(checkTitle("A Mind Boggling Achievement"));

console.log(checkTitle("A Simple Java Script Program!"));

console.log(checkTitle("Water is transparent"));
