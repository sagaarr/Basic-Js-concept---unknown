console.log("Switch-case");

const color = 'blue';
switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log("color is blue");
    break;
  default:
     console.log("color is nither red or blue");
     break;
}

let day;
// here the .getDay() will give the decimal value representing the day 
switch(new Date().getDay()){
  case 0:
   day = 'sunday';
   break;
  case 1:
   day = 'monday';
   break;
  case 2:
   day = 'tuesday';
   break;
   case 3:
   day = 'wednesday';
   break;
   case 4:
   day = 'thuresday';
   break;
   case 5:
   day = 'friday';
   break;
   case 6:
   day = 'saturday';
   break;
}

console.log(day);


