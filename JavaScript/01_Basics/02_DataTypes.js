"use strict";

// With strict mode
var x = 10;

function displayValue() {
    y = 20; // Error in strict mode: Uncaught ReferenceError: y is not defined

    console.log(x);
    console.log(y);
  }
  
  displayValue();
  console.log(x);
  console.log(y); // Error in strict mode: Uncaught ReferenceError: y is not defined

  /**
   * If i remove use strict the output will be 10 20 10 20
   */

// Unexpected behavior of js engine/compiler/interpreter
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
  console.log(typeof null === "object"); // true


/**
 * DATA TYPES
 *  number => 2 to power 53
 *  bigint
 *  string => ""
 *  boolean => true/false
 *  null => standalone value
 *  undefined 
 *  symbol => uniqueness
 *  object
 *  array 
 *  etc....
 */
