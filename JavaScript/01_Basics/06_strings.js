let userName = "sujith";
let repoCount = 7;
// String concatination using + operator ( but this not recomended way to write)
console.log(userName + repoCount + "repos");

// string interpolation ( this is modern way to write & recomended way )
console.log(`My name is ${userName} , I have ${repoCount} repos in my github`);

const gameName = new String("sujith");
console.log(gameName[0]);
console.log(gameName.__proto__); 

/************************************  STRING METHODS ***************************************/ 

// at(); || parameter index || it is not inbuilt JS method for strings
// if we provide index number it will give character at that particular index 
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
 
/** ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// charAt(); parameter index
// undefined treated as 0 || It returns empty string if index is out of bound or negative values 
// No index provided it used as 0 by default
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 4   is '${anyString.charAt(-1)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
 
/** ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// concat()
const str1 = "Hello";
const str2 = " World!";
const result = str1.concat(str2);
console.log(result); // Output: "Hello World!"


const greetList = ["Hello", " ", "sujith", "!"];
const result1 = "".concat(...greetList);    //concat using spread operator
console.log(result1); // Output: "Hello sujith!"  

/** ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// endsWith() || returns true/false
/**
 * endsWith(searchString)
 * endsWith(searchString, endPosition)
 * end position :: the index of searchString's last character plus 1
 */
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true 

/** ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//includes() || case sensitive 
/**
 * includes(searchString)
 * includes(searchString, position)
 */
// case sensitive
console.log("Blue Whale".includes("blue")); // returns false
console.log("Blue Whale".toLowerCase().includes("blue")); // returns true

const str7 = "To be, or not to be, that is the question.";
console.log(str7.includes("To be")); // true
console.log(str7.includes("nonexistent")); // false
console.log(str7.includes("To be", 1)); // false // index mismatch || wrong index 
console.log(str7.includes("TO BE")); // false
console.log(str7.includes("")); // true

const sentence1 = "JavaScript is amazing! JavaScript is powerful!";
const searchTerm = "JavaScript";
const positionToSearchFrom = 12;

const includesResult = sentence1.includes(searchTerm, positionToSearchFrom);

console.log(includesResult); // Output: true

