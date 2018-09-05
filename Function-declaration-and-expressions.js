console.log("Function-declaration-and-expressions");

function name(firstName){
  
  if(typeof firstName == 'undefined'){
    firstName = 'sagar'; 
  }
  return `hello ${firstName}`
}
// console.log(name());

// FUNCTION EXPRESSION
const square = function(x=3){
  // The meaning of these code samples is the same: "create a function and put it into the variable".
  return x*x;
};

console.log(square());

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

// Here’s what happens above in detail:

// The Function Declaration (1) creates the function and puts it into the variable named sayHi.

// Line (2) copies it into the variable func.

// Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.

// Now the function can be called as both sayHi() and func().

// -------------------------------------------------------------------------------------------------------
// IMMEDIATLY INVOCABLE FUNCTION EXPRESSION IIFE
(function(){
  console.log("IIFEs ran ...")
})();

(function(name){
  console.log(`hello ${name}`)
})('sagaar');

// This is a simple function in which anything written inside the function block shall be executed immediately.

// In the above example, once the code is executed, following events occur:

// 1. A function Instance is created.

// 2. Function is Executed.

// 3. Function along with variable declared inside it is Garbage Colloected.

// The variable and functions that were declared in the scope of IIFE are available for garbage collection, once the IIFE is executed. Hence managing Memory in an efficient manner and ensures that the function and variables do not bind itself to the global scope.



// PROPORTY METHOD 
const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`edit todo ${id}`);
  },
}

todo.delete = function(){
  console.log('delete todo..');
}
todo.add();
todo.edit(13215);
todo.delete();

