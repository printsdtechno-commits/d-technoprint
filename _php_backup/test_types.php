<?php 
 
 /** 
  * @param string $s  <- A phpdoc parameter type annotation 
  * @return string[] <- A phpdoc return type annotation with detail on the array element type 
  **/ 
 function foo(string $s): array {
     return ["Hello", "World", $s];
 }

 // Test the function
 $result = foo("PHP 8.2");
 print_r($result);

 echo PHP_EOL . "----------------" . PHP_EOL;

 /**
  * @param object $obj
  * @return string
  */
 function toString(object $obj): string {
     // Check if object has __toString method
     if (method_exists($obj, '__toString')) {
         return $obj->__toString();
     }
     // Fallback to class name
     return "Object of class: " . get_class($obj);
 }

 // Test with stdClass
 $o = new stdClass();
 echo toString($o) . PHP_EOL;

 // Test with anonymous class
 $anon = new class {
     public function __toString() {
         return "I am an anonymous object";
     }
 };
 echo toString($anon) . PHP_EOL;
