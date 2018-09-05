console.log(" Strings-and-concatination");

const firstName = "sagar";
const lastName = 'chinchorkar';
const age = 23;
const str = "hello, my name, is sagar, i am, an engineering student";
let val;

val = firstName + lastName;
// concatenation
val = firstName + " " + lastName;
// Append
val = "sonal ";
val += 'sagar';

val ="hello my name is " + firstName + " i am " + age + ' old';

// Escaping 
val = 'that\'s awseem , i can\'t wait ';

// length
val = firstName.length;
// concat
val = firstName.concat(' ' , lastName);
// change cases
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[2];
// indexOf
val = firstName.indexOf("g");
val = firstName.lastIndexOf('a');
// charAt()
val = firstName.charAt('1');
// get a last char 
val = lastName.charAt(lastName.length - 1);
// substring()
val = lastName.substring(0,4);
// slice()

// split()
val = str.split(',');
// replace()
val = str.replace('sagar' , 'sonal');
// includes()
val = str.includes("sagar");
val = lastName.slice(-4);

console.log(val);
