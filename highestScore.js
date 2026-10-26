// Create a  function that takes an object with student names as keys and their scores as values. The function should return the name of the student who has the highest score.
//  Examples: ● getTopScorer({ Alice: 85, Bob: 92, Charlie: 88 }) = “Bob”
//   ● getTopScorer({ Riya: 76, Meera: 91, John: 89 }) = “Meera 
//   ● getTopScorer({ Sam: 59, Max: 57, Leo: 58 }) = “Sam” 

function getTopScorer(scores){
  let topscorer= "";
let highestScore =0 ;
  for(let get in scores){
    if(scores[get]>highestScore){
      highestScore=scores[get];
      topscorer = get;
    }
    
  }
  return topscorer;
}

console.log(getTopScorer({ Alice: 85, Bob: 92, Charlie: 88 }));
console.log(getTopScorer({ Riya: 76, Meera: 91, John: 89 })); 
console.log(getTopScorer({ Sam: 59, Max: 57, Leo: 58 }));
