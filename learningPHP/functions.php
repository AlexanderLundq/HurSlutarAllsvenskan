<?php

/*
http://localhost/phpsandbox/functions.php
*/

// A function is a block of code that can be repeatedly called

// Three types to format functions, variables, classes etc.
/*
  Camel Case  - myFunction()
  Lower Case  - my_function()
  Pascal Case - MyFunction()
*/

// Define function
function simpleFunction(){
  echo "Hello World <br>";
}

// Calling the function
simpleFunction();

// Function with parameter
// Can set default value to parameter to avoid error if no argument is passed
function sayHello($name = 'World'){
  echo "Hello $name <br> ";
}

sayHello('Niklas');
sayHello('Bob');

// Return value from function
function addNumbers($num1, $num2){
  return $num1 + $num2;
}

echo addNumbers(5,3) , '<br>';

// Passing arguments by refernce to manipulate variables
$myNum1 = 10;
$myNum2 = 10;
function addFive($num){   // Only passed as value (does not manipulate stored value)
  $num += 5;
}
function addFive2(&$num){ // Ampersand (&) means its passed as reference
  $num += 5;
}
addFive($myNum1);  // Passed as value
addFive2($myNum2); // Passed as reference
echo $myNum1 , '<br>';
echo $myNum2 , '<br>';

 ?>
