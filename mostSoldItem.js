// Create a function that accepts an object where keys are item names and values are the number
// of times they were sold. The function should return the name of the item that was sold the 
// most.(score 2). Examples:

// ● mostSoldItem( {shoes: 120, shirts: 90, pants: 150, hats: 75} ) ➞ “pants” 

// ● mostSoldItem( { phones: 300, laptops: 450, tablets: 250, watches: 100} ) ➞ “laptops” 

// ● mostSoldItem( {pens: 500, pencils: 499, erasers: 300}) ➞ “pens”



function mostSoldItem(items) {
  let keys = Object.keys(items);
  let values = Object.values(items);

  let max = Math.max(...values);
  let index = values.indexOf(max);

  return keys[index];
}


console.log(mostSoldItem({shoes: 120, shirts: 90, pants: 150, hats: 75}));

console.log(mostSoldItem( { phones: 300, laptops: 450, tablets: 250, watches: 100} ) );

console.log(mostSoldItem( {pens: 500, pencils: 499, erasers: 300}));
 