// The starter below has a bug. Fix `lowestReading`. Return the smallest reading in `readings`.


// ### Examples
// ```javascript
// lowestReading([8,3,12]) // 3

// lowestReading([-4,2,-7]) // -7

// lowestReading([9]) // 9
// ```

// ### Notes

// `readings` is a nonempty array of at most 30 integers from -100 to 100. Readings may repeat.

// Selection deleted

// function lowestReading(readings) {

// let lowest = 0;

// let str = readings;

// for (let i=0;i\<readings.length;i++) {

// if (str[i] < readings){

// lowest = str[i];

// }&#x20;

// }

// return lowest;

// }



// **Check**

// **FAILED**

// Value case 8 - Expected: -100, instead got: 0.

// ### What changed

// You removed the invalid `split` call, so execution now reaches the loop; the remaining 
// comparison uses the whole array instead of the current minimum.

// ### Why it fails

// JavaScript may coerce an array during a numeric comparison, so `str[i] < readings` does not 
// reliably compare the current reading with your saved `lowest`; starting `lowest` at `0` also 
// cannot produce a negative minimum unless the comparison updates it.

// ### Try next

// Compare each reading with `lowest`, and initialize `lowest` from an actual item in the 
// nonempty array so the loop can correctly handle negative values too.



function lowestReading(readings) {
  let lowest =readings[0];
  
  for (let i=0;i<readings.length;i++) {
    if (readings[i]< lowest){
      lowest = readings[i];
    } 
  }
  return lowest;
}

