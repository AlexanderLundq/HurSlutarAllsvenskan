<?php

/*
http://localhost/phpsandbox/loops.php
*/

# LOOPS - Execute code set number of times
/*
  for
  While
  Do..while
  Foreach
*/

//For Loop
// @params - init, condition, inc
echo 'for loop';
echo '<br>';
for ($i=0; $i < 10; $i++) {
  echo $i;
  echo '<br>';
}

//While Loop
// @params - condition
echo 'while loop';
echo '<br>';
$i = 10;
while($i <20){
  echo $i;
  echo '<br>';
  $i++;
}

//Do..While
// @params - condition
// always going to run at least once
echo 'do..while loop';
echo '<br>';
$i = 20;
do{
  echo $i;
  echo '<br>';
  $i++;
}
while($i < 30);

//foreach loop
echo 'foreach loop indexed array';
echo '<br>';
$people = array('Brad', 'Jose', 'William');
foreach($people as $person){
  echo $person;
  echo '<br>';
}
echo 'foreach loop associative array';
echo '<br>';
$people2 = array('Brad' => 'brad@gmail.com', 'Jose' => 'jose@gmail.com', 'William' => 'william@gmail.com');
foreach($people2 as $person2 => $email){
  echo $person2 . ':' . $email; // concatinate strings
  echo '<br>';
}

 ?>
