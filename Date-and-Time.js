console.log("Date-and-Time");

let val;
const today = new Date();
// Different methods to declare custom Date 
let Birthday = new Date('february 17 1995');
Birthday = new Date('2/17/1995');
Birthday = new Date('2-17-1995');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// for customization in date and time 

Birthday.setMonth(5);
Birthday.setDate(15);
Birthday.setFullYear(1985);
Birthday.setHours(3);
Birthday.setMinutes(39);
Birthday.setSeconds(50);


console.log(Birthday);

