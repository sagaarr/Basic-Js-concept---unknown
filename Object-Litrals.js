console.log("Object-Litrals");

const person = {
  firstName : 'sagar',
  lastName : 'chinchorkar',
  age : 23,
  email : 'sdj@lkdjj.com',
  hobbise : ['swiming', 'gogging'],
  address:{
    city : 'saklfd',
    state : 'mh' 
  },
  getBirthDay : function(){
    return 2018 - this.age;
  }
};

let val ;
val = person ;
// get specific value 
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbise[0];
val = person.address.state;
val = person.getBirthDay();

console.log(val);










