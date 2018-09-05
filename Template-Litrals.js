console.log("Template-Litrals");

const name = 'sagar';
const age = 23;
const job ='web developer';
const city = 'a.nagar';
let html ;

// without template string old ES5 method 

html = '<ul><li>name: ' + name  + ' </li><li>age: '+ age +' </li><li>job : '+ job  +'</li><li> city: '+ city +'</li></ul>';



html = '<ul>' +
       '<li>name: ' + name  + ' </li>'+
       '<li>age: '+ age +' </li>'+
       '<li>job : '+ job  +'</li>'+
       '<li> city: '+ city +'</li>'+
       '</ul>';
// With Tenplate string with ES6 method 
html = `
        <ul>
        <li>name: ${name}</li>
        <li>age: ${age}</li>
        <li>job: ${job}</li>
        <li>city: ${city}</li>
        </ul>
       `;

document.body.innerHTML = html;

