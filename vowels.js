function vowReplace (args,str){
  let result = "";
  for(let i=0;i<args.length;i++){
    if("aeiou".includes(args[i])){
       result+=str;
    }else{
      result+=args[i];
    }
  }
  return result;
}

console.log(vowReplace("apples and bananas", "u"));

