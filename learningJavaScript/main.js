// Code is based on https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2792s

// This is a comment
// Semi-colon not mandatory in JS
// JS is a procedual language, it has support for both OO and functional programming

// F12 in chrome on windows to open console (for debug printing)
// Console has a couple of different methods
// A method is a function that relates to an object
console.log('Hello Console'); // How to output to console
console.error("This is an error"); // Red and shows linenumber in console
console.warn("THis is a warning"); // Yellow and shows linenumber in console

// Variables and declaration of them
// var, let, const
// var becomes a problem when variables with same name have been declared before
// let can be updated but not re-declared
// const keep constant value, needs to be initialized
// always use const if you don't know that you are going to change the value

// Data types
// JS is not statically typed (don't need to specify type)
// String, Numbers, Boolean, null, undefined, (Symbol)
// No float or int, just number
// Null means empty
const name = 'John';
const age = 30;
const rating = 4.5;
const isMale = true;
const x = null;
const y = undefined; // Same thing as let y;

// typeof x will return object, this is incorrect (it its really null)
console.log(typeof x);

// Template string (use backticks `` instead of quotes "")
console.log(`My name is ${name} and I am ${age}`)

// Arrays
// Zero-based (starts at zero)
// Can have multiple data types in the same array
// Array can be modified despite being const, but not re-assign
const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['apples', 'oranges', 'pears'];
const mix = [0, 1, 'apples', 'oranges', 2, 4];
console.log(numbers);
console.log(numbers[2]);
console.log(fruits);
console.log(mix);
// numbers = [5, 4, 3, 2, 1] is not allowed
numbers.push(6); // adds elemet to the end of the array
numbers.unshift(0); // adds element to the begining of array
console.log(numbers);

// Object literal
// Comma-separated list of name-value pairs wrapped in curly braces
// Possible to do embedded objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person);
console.log(person.address.city, person.hobbies[2]);
// Pulling stuff out of person object (not asserting)
const {firstName, address: {state}} = person;
console.log(firstName, state);
// Add properties
person.email = 'john@gmail.com';
console.log(person);

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  },
];
console.log(todos);
console.log(todos[1].text);

// JSON format = JavaScript Object Notation format
// used when sending data to a server
// https://www.freeformatter.com/json-formatter.html
// Copy everything from [ to ] (without final semicolon)
// or use the method below
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// loops

for(let i = 0; i < 10; i++){
  console.log(i);
}
let i = 0;
while(i < 10){
  console.log(`While Loop number: ${i}`);
  i++;
}

// todo is the variable for each item
for(let todo of todos){
  console.log(todo.text);
}

todos.forEach(function(todo) {
  console.log(todo.text);
});

// map returns array
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// return array with text but only for todos that are completed
const todoCompletedTrue = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text
})
console.log(todoCompletedTrue);
//-----------------------------------------------------------------------------
// Conditionals

  const x_10 = 10;

  // == matches value
  // === also matches (check) that data types are the same
  // || is or
  // && is and
  if(x_10 === 10 ){
    console.log('x is 10')
  } else if (x_10 > 10){
    console.log('x is greater than 10')
  } else {
    console.log('x is less than 10')
  }

  // Ternary (conditional) operator
  // If condition is ture, set to red, else (:) set to blue
  const color_2 = x_10 === 10 ? 'red' : 'blue'
  console.log(color_2)

  // Switches
  switch (color_2) {
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    default:
      console.log('Color is not red or blue');
      break;
  }

//-----------------------------------------------------------------------------
// Functions

  // Parameters can have deafault values
  // If function is called without parameters it will go by deafault
  // If no deafult values are given it will give NaN = Not-a-Number
  function addNums(num1 = 1, num2 = 1){
    return num1 + num2
  }
  console.log(addNums());
  console.log(addNums(5,4));

  // Arrow functions
  const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2
  }
  console.log(addNums(5,5));

  // Allows you to write simple functions easier
  const multiply = (x, y) => x*y;
  console.log(multiply(10,10));

//-----------------------------------------------------------------------------
// Object Oriented programming

  // Constructor function
    function Person(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob); // Date format string date type

      this.getBirthYear = function(){
        return this.dob.getFullYear();
      }
    }

    // Prototypes (if we don't want functions in the objects)
    Person.prototype.getLastName = function() {
      return this.lastName;
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1998')

    console.log(person1);
    console.log(person1.dob.getFullYear());
    console.log(person1.getBirthYear());
    console.log(person1.getLastName());

// Classes (same as above but different syntax)
  class Person2 {
    constructor(firstName, lastName, dob){
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
    getBirthYear(){
      return this.dob.getFullYear();
    }
    getLastName(){
      return this.lastName;
    }
  }

  const person2 = new Person('John', 'Doe', '4-3-1998')
  console.log(person2.getLastName());

  //-----------------------------------------------------------------------------
  // Object Oriented programming
