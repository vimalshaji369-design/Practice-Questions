function balancesAfterChanges(starting, changes) {
  let sum = starting;
  let total =[];

  for(let i=0;i<changes.length;i++){
    sum += changes[i];
    total.push(sum);
  }
  return total;
}