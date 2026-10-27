//  Write a function that takes a string as input and returns the number of consonants in the string
//  .(score 2).
//   Examples : 
//   ● countConsonants(“Hello World”) = 7
//    ● countConsonants(“AEIOUaeiou”) = 0 
//    ● countConsonants(“Programming is fun!”) = 11 



function  countConsonants(count){
  letters =0;
  for(let i=0;i<count.length;i++){
    let letter=count[i].toLowerCase();
    
    if(letter>="a" && letter<="z" && !"aeiou".includes(letter)){
      letters++;
    }
  }
  return letters;
}
console.log(countConsonants(“Hello World”));
console.log(countConsonants("AEIOUaeiou"));
console.log(countConsonants("Programming is fun!"));