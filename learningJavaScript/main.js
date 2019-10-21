// This is a comment
// Semi-colon not mandatory in JS

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
