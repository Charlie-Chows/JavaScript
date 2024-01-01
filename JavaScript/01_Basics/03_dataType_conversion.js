let user = "sujith";
// Check type in different ways 
console.log(typeof user);
console.log(typeof (user)); // parenthesis doesn't play any role it is not godd way to them for single variable in typeof
console.log(typeof "sujith"); 

//string to number conversion
let carModel = "Bugatti";
let value = Number(carModel);
//it stores like this let value = NaN;
console.log(value);     //NaN  
console.log(typeof value);  // number
// In javascript classifications NaN considered as number

let id = "7";
let numString = Number(id);
console.log(numString);  // 7 
console.log(typeof numString);   // number

//number to string conversion
let num = 7;
let stringNum = String(num);
console.log(stringNum);

// undefined to number
let score = undefined;
let newScore = Number(score);
console.log(newScore);   // NaN
console.log(typeof newScore);   // type ::  number 


// null to number 
let rollNum = null;
let updatedRollNum = Number(rollNum);
console.log(updatedRollNum);    // 0
console.log(typeof updatedRollNum); // number
console.log(null == 0); //false
console.log(null === 0); //false


// number to boolean
let intialNum = ""; // any non-zero number consider as true , 0 is only considered as false
let updatedNum = Boolean(intialNum);
console.log(updatedNum);    // false
console.log(typeof updatedNum); // boolean
