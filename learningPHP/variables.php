hello
<h1> Hello </h1>

<?php

  // this is a single line comment
  # this is a single line commet
  /*
  This is a multiline comment
  */

  /*
  http://localhost/phpsandbox/variables.php
  */

  //echo prints stuff on screen
  echo 'Hello World';

  //print also prints stuff on the screen and returns a value
  print 'Hello World';
  //echo is a little bit faster than print

  //---------------------------------------------------------------------------

  #variables
  /*
    Variables need prefix with dollar-sign $, else its a constant
    Variables have to start with a letter or underscore _
    Variables are case sensetive
  */
  echo "<br>"; //new line
  $output = 'Hello World';
  echo $output;

  //data types

    //string have to be in quotation marks
      $string1 = 'Hello';
      $string2 = 'World';
      //$greeting = $string1 + $string2; // gives an error
      $greeting   = $string1 . ' ' . $string2 . '!'; // use dot (.) to add strings
      $greeting2  = '$string1 $string2'; // just prints the text
      $greeting3  = "$string1 $string2"; // use double quates to parse strings

      echo "<br>"; //new line
      echo $greeting;
      echo "<br>"; //new line
      echo $greeting2;
      echo "<br>"; //new line
      echo $greeting3;

      // escape characters
      $string3 = 'They\'re here'; // use backslash to make variables to lose meaning
      $string4 = "They're here";
      $string5 = "He said \"Open the door\"";

      echo "<br>"; //new line
      echo $string3;
      echo "<br>"; //new line
      echo $string4;
      echo "<br>"; //new line
      echo $string5;

      //constants
      //typically uppercase
      //case sensetive by default
        define('GREETING', 'Hello Everyone!');
        //define('GREETING', 'Hello Everyone!', true); //to make constant not case sensetive
        echo "<br>"; //new line
        echo GREETING;


    //integers
      $num1 = 4;
      $num2 = 10;
      $sum = $num1 + $num2;

    //floats (decimals)
      $float1 = 4.4;

    //booleans
      $bool1 = true;

    //arrays
    //Objects
    //NULL
    //Resource



//endtag can be skipped if nothing is below
?>
