console.log("JS is connected!")

// Fundamental data types
const studentID ="123456789"; //constants don't change
let firstName= "Ian";
let age= "19 yrs old";
let isStudent= true;
let gpa = 3.8;
let major = undefined;


console.log(firstName, age);

// Reassignment (no let)
age = 17;
age  = age + 1;
age -= 1;

console.log(age);
// Essential Operations
age + 10;
age - 5;
age * 2;

// Additional operations
console.log(Math.round(5.8));
console.log(Math.floor(5.8)); //floor will always rounds DOWN.
console.log(Math.ceil(5.8)); //ceil will always rounds UP. 

// Concatenation v. templates
//option 1
let string1 = firstName + " is " + age + " years old. "

//option 2
let string2 = `${firstName} is ${age} years old.`; // must use back tick 
console.log(string1);
console.log(string2);

// String methods
console.log(string1.toUpperCase());
console.log(string1.includes("old")); 

// Comparison operators - true or false?
age == 10;
"42" === 42;
age > 19;
age <= 19;
year === "freshman";


// Conditional statements;
let username = "Miles";
let age2 = 18;
if ( username === "Miles" && age2 === 18) {
    console.log(" Welcome, Spiderman");
}else if (age2 < 18) {
    console.log("unauthorized youth access");
} else {
    console.log(`Welcome, ${username}!`);
}

// functions

// Returns half the number if it can be halved; otherwise returns false


// Functions can also be written as arrows. Body of function doesn't change, just the signature.

function getHalf(x) {
    if (x % 2 === 0) {
        return x / 2;