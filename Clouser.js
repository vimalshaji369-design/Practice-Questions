function outer(){
  let name ="vimal";

  function inner(){
    console.log(name);
  }
  inner();
}
outer();