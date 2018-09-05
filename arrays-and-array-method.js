console.log('arrays-and-array-method');
const numbers = [1,2,3,5,21,65,5,16,651,6,5,6];
const numbers2 = [25,6548,4564,6546,65,64,654,898];
const name = ['sagar', 'sonal', 'true', 'false'];
const mixed = ['sagar', true, Date(), {as:1, df:516}];
let val;

// get array length 
val = numbers.length;
// check if array 
val = Array.isArray(numbers);

// get single value 
val = numbers[3];

// Insert in array; 
numbers[0] = 10000;

// find index value of 
val = numbers.indexOf(651);

// mutating array
// add a new value at the end 
numbers.push(1.564);

// add a element at the beginning of the array
numbers.unshift(2.4645);

// remove the number from the back of array
numbers.pop();
// remove number from the start of a list
numbers.shift();

// splice value 
// val = numbers.splice(0,3);

// reverse array
// numbers.reverse();

// concatinate array 
// val = numbers.concat(numbers2);

// sorting array 
val = numbers.sort();
val = name.sort();

// use compare function
val = numbers.sort(function(x , y){
  return x - y;
});

// reverse sort 
val = numbers.sort(function(x, y){
  return y-x;
});



console.log(numbers);
console.log(val);


