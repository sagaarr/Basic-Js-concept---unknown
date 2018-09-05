let val;
// Number to string 
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// array to string
val  = String([1,2,3,4]);
// .toString() method
// toString() is similar to the string method just the declaration is different
val = (5).toString();
val = (true).toString();

// Sring to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number("hello");
val = Number([1,2,3,4]);

// parseInt method is specific method only for integer number so if we tried to put any number ie; 1.021 it will give us 1 at o/p
val = parseInt('100.03');

// parseFloat()
val = parseFloat("100.23546");
  
// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(5));