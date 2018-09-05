console.log("General Loops");

// FOR LOOP
for(let i = 0; i<10 ; i++){
  if(i === 2){
    console.log(" 2 is printed");
    continue;
  };
  if(i === 6){
    console.log("Break statement");
    break;
  }
  console.log("number" + i);

}

// WHILE LOOP
let i = 0;
while(i<10){
  console.log(`number  ${i}` );
  i++;
};

// DO WHILE LOOP 
let i = 10;
do{
  console.log(`number ${i}`);
  i++;
}

while(i<10);

// LOOP THROUGH ARRAY
const car = ['ford', 'chevy', 'honda', 'toyota', 'audi'];

for(let i = 0; i<car.length ; i++){
  console.log(car[i]);
};

// forEach LOOP
car.forEach(function(index,cur , array){
  console.log(`${index}: ${cur}`);
  console.log(array);
});

// MAP
const users = [
  {id: 1, name: 'sagar'},
  {id: 2, name: 'sag'},
  {id: 3, name: 'babblu'},
  {id: 4, name: 'bulbul'},
];

const ids = users.map(function(user){
  return user.id;
});
console.log(ids);

// for...in LOOP used for object
const user = {
  firstName : 'sagar',
  lastName : 'chinchorkar',
  age : 23
};

for(let i in user){
  console.log(`${i} : ${user[i]}`);
  console.log();
}










