function  objectValuesToArray(values){

let sort =[];
  for(key of Object.entries(values)){
    sort.push(key[1]);
  }
  return sort;
}
console.log(objectValuesToArray({ a: 1, b: 2, c: 3 }));

console.log(objectValuesToArray({ name: "Alice", age: 25, city: "London" }));

console.log(objectValuesToArray({ x: true, y: false }));
