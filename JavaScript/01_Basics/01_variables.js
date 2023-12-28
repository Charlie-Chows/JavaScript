// CONST can't be changed
const userId = "7";

//LET is a block scope variable
let userName = "CharlieChows";

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