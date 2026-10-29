// Create a function that checks if the word "help" appears in a given string (case insensitive). 
// If found, return "Hang on, help is coming!", otherwise return "All good, no help needed.".
//  (score 2) 
//  Examples :  
//  ● findHelp("Can someone HELP me?") ➞ "Hang on, help is coming!" 
//  ● findHelp("Everything is fine here.") ➞ "All good, no help needed." 
//  ● findHelp("He yelled for help!") ➞ "Hang on, help is coming!" 


function findHelp(word){

 
    if(word.toLowerCase().includes("help")){
      return  "Hang on, help is coming!" ;
    }else{
      return  "All good, no help needed.";
    }

}

console.log( findHelp("Can someone HELP me?"));

console.log(findHelp("Everything is fine here.") );

console.log(findHelp("He yelled for help!"));