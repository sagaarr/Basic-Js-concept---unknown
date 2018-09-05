console.log("if-statement-and-comparison-operator ");

const id = 100;

// equal to 
if(id == 100){
  console.log("correct");
}else{
  console.log("incorrect");
}
console.log("------------------------------");
// not equal to 
if(id != 101){
  console.log("correct");
}else{
  console.log("incorrect");
}
// equal to value and type
console.log("------------------------------");
if(id === 100){
  console.log("correct");
}else{
  console.log("incorrect");
}
console.log("------------------------------");
// equal to value and type
if(id !== 100){
  console.log("correct");
}else{
  console.log("incorrect");
}
console.log("------------------------------");
// using template literal and check if id is present or not
if(typeof id !== 'undefined'){
  console.log(`the id is ${id}`);
}else{
  console.log('id is not present');
}
console.log("------------------------------");
// greater than or less than 
if(id >= 200){
  console.log('correct');
}else{
  console.log("incorrect");
}

console.log("------------------------------");

// IF ELSE
const color = 'red'; 
if(color === 'red'){
  console.log(`color is ${color}`);
}else if(color ==='blue'){
  console.log(`color is ${color}`)
}else{
  colsole.log("color is not present here");
};

console.log("------------------------------");

// logical operator 
const name = 'sagar';
const age = 40;
// AND OPERATOR
if(age > 0 && age < 19){
  console.log(`${name} is between child and a teen`);
}else if(age > 19 && age <= 40 ){
  console.log(`${name} is an adult man`);
}else{
  console.log(` ${name} is too old to compit `);
}
console.log("------------------------------");
// OR OPERATOR 
if(age < 4 || age> 65){
  console.log(` ${name} cannot run in a race `);
}else{
  console.log(`${name} is registered to the race`);
}
console.log("------------------------------");
// TURNARY OPERATOR
console.log(id === 100 ? 'correct' : 'incorrect');

console.log("------------------------------");

console.log("in Js the curly bracket are optional so you can write a code without it");



