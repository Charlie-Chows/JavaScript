/******************* COMPARISIONS ********************/ 
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined == 0); // false

console.log(undefined == null); // true

/******************** EQUALITY CHECK *******************/

// STRICT CHECK VS lOOSE CHECK 
console.log("02" == 2); // true
console.log("02" === 2); // false
