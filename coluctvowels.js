function removeConsonants(word){
let letter = word;
  let v=" ";
  for(let i=0;i<letter.length;i++){
    if("aeiouAEIOU".includes(letter[i])){
    v+= letter[i] + " ";
    }
  }
  
  return v;
}


console.log(removeConsonants("I have never seen a thin person drinking Diet Coke."));


console.log(removeConsonants("We're gonna build a wall!") );


console.log(removeConsonants("Happy Thanksgiving to all--even the haters and losers!") );