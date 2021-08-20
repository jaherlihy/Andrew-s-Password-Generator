


const numbers = [1,-1, 2, 3, undefined];

const filterednum = numbers.filter(function(value){
  return value >= 0; 
  
});

console.log(filterednum);


var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3 ];
 
var string = "sdlkfjsdfkl28937cknfvundefined";

var filteredstring = string.filter(function(x) {
     return x !== undefined;
});
 
console.log(filteredstring);
 