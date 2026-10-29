// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax."
// .(score 2) 
// Examples :  
// ● bomb("There is a bomb.") ➞ "Duck!!!" 
// ● bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!" 
// ● bomb("This goes boom!!!") ➞ "There is no bomb, relax." 



for(i=0;i<check.length;i++){
    if(check.includes("bomb")){
      return "Duck!!!";
    }else{
      return "There is no bomb, relax." ;
    }
  }
  
}


console.log(bomb("There is a bomb."));

console.log(bomb("Hey, did you think there is a bomb?"));

console.log(bomb("This goes boom!!!") );
