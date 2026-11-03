function greet(name){
  console.log("Hello "+ name);
}
function welcome(callback){
  callback("vimal");
}
welcome(greet);