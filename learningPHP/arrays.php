<?php

  // http://localhost/phpsandbox/arrays.php

  // An Array is a variable that holds multiple values
  /*
    Three types
      -Indexed
      -Associative
      -Multi-dimensional
  */

  // Indexed
    $people = array('Kevin', 'Jeremy', 'Sara');
    echo $people[1];

    $ids = array(23, 55, 12);
    echo "<br>"; //new line
    echo $ids[2]; //new line

    // do not need to use array function
    $cars = ['Honda', 'Toyota', 'Ford'];
    echo "<br>"; //new line
    echo $cars[0]; //new line
    $cars[] = 'BMW'; //add to end of array
    echo "<br>"; //new line
    echo count($cars); // count the number of elements in array
    print_r($cars); // prints the whole array
    echo "<br>"; //new line
    var_dump($cars); // shows array size, each key and value and data types

  // Associative
  // Define key and value relation
    $people2 = array('Brad' => 35, 'Jose' => 32, 'William' => 37);
    echo "<br>"; //new line
    echo $people2['Brad']; // Print out value for specific string
    $people2['Jill'] = 42; // Add element
    echo "<br>"; //new line
    print_r($people2);

  // Multi-dimensional
  // Brand, number of Cars in stock, Number of Cars sold
    $cars2 = array(
      array('Honda', 20, 10),
      array('Toyota', 30, 20),
      array('Honda', 23, 12)
    );
    echo "<br>"; //new line
    echo $cars2[1][0];
 ?>
