// CONST can't be changed
const userId = "7";
// userId = "8"; // Assign new value to const variable is NOT ALLOWED

//LET is a block scope variable
let userName = "CharlieChows";
userName = "Sujith"; // assign new value to existing variable 

// VAR is global scope variable
var userPassword = "123abc";

//didn't assign anything like var,let,const 
userCountry = "India";

//didn't assign any value 
let userPincode;


// to print in console
console.log(userId);

// to print all in console in tabular form 
console.table([userId,userName,userPassword,userCountry,userPincode]);