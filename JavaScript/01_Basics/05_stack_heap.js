//  STACK ( PRIMITIVE ) & HEAP ( NON - PRIMITIVE )

// STACK => It changes copy of data

let nameOne = "sujith";

let nameTwo = nameOne;
console.log(nameTwo); // sujith
nameTwo = "Charlie";
console.log(nameTwo); // Charlie
console.log(nameOne); // sujith


// HEAP => It changes original/reference data

let userOne = {
    email : "abc@gmail.com",
    id : 123,
}

let userTwo = userOne;
console.log(userOne.email); //abc@gmail.com
console.log(userTwo.email); //abc@gmail.com

userTwo.email = "xyz@gmail.com";
console.log(userOne.email); //xyz@gmail.com
console.log(userTwo.email); //xyz@gmail.com

// Here both are reference to the same memory that's why it changes in both value