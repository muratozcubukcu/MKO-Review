<?php
// echo "Welcome " . $_POST["fname"]. $_POST["lname"]; 

 $st = $_POST["fname"] . " " . $_POST["lname"] . "\n";
//echo $st

if (empty($st))
    echo "Nothing to write";

// if the form string is not empty then open the target file and put form data in it
else
{
    $myfile = fopen("test.txt", "a+");
   echo fwrite($myfile, $st);

    // show a success msg 
    echo "<br><br>" . "Data successfully entered!" . "<br><br>";    
    fclose($myfile);
}
 
 echo "Here is what I have in the file so far...." . "<br><br>";    
$myfile = fopen("test.txt", "r") or die("Unable to reopen file!");
// Output one line until end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);

echo "<a href='http://ozcubukcu.net/test/php/index.html'>" . "<-- Go back for a new entry" . "<a/>";

?>
