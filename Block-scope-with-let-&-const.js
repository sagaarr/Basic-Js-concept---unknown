console.log("Block-scope-with-let-&-const");
// Global
var a = 1;
let b = 2;
const c= 10 ;

function text(){
  var a = 30;
  let b = 20;
  const c = 230 ; 
  console.log('function scope: ', a ,b, c);
}
 text();

//  Block level scope

if(true){
  var a = 450;
  let b = 652;
  const c = 785;
  console.log('block level scope : ' ,a,b , c);
}

for (var a = 0 ; a<10 ; a++){
  console.log(`block scope in for loop : ${a}`);
}

console.log('global scope:' ,a ,b,c);

// NOTE - - var == is function level scope 
//          let & const === is block level scope
