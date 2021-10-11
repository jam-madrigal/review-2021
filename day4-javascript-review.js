// A do while loop will run the function at least once and then check the condition, the syntax is as follows:
var words = [];
var i = "beepus";

do { 
  words.push(i);
  i += "s";
} while (i.length < 10);

console.log(words);

// For example, if this was just a while loop, it would not push "beepus" to the array if the condition checked for a length it did not already reach, such as less than 6.

// Math.random() returns a random decimal between 0 and 1, and can equal 0 but can never equal 1.

// Math.floor() rounds down to the nearest whole number, ex. Math.floor(Math.random() * 38); will return a random number between 0 and 37.

console.log(Math.random());
console.log(Math.floor(Math.random() * 38));

// parseInt() converts a string to an integer, if possible

console.log(parseInt("24"));

// parseInt() can also be used with a radix, for example a 2, to tell it to convert it to binary, in thise case 10011 for 19 in binary.

console.log(parseInt("10011", 2));

// Ternary operators. Another one of my favorites like switch statements. Clean and satisfying. A one line if else statement. The syntax: condition ? if-true : if-false

var a = 3;
(a === 3) ? console.log("yes") : console.log("no");

// The above is like an if else statement. If a is equal to 3, return yes, else return no.

// Ternary operators can be nested within each other, but that could be hard to read if overdone.

// On to ES6. Trust me, I was cringing using var in the review. Now we can use let and const declarations more often.

// A huge benefit is that with a let declaration, it cannot be declared twice. You can make multiple var declarations of the same name without any problem, which can easily cause issues as code gets bigger if someone else used that variable elsewhere. let will prevent this from happening, as they cannot be re-declared.

// Using "use strict"; (written in quotes like that) will catch common coding mistakes, like declaring a variable without var let or const, and is common to use at the start of a javsacript file or at the start of the inside of a declared function. This enables strict mode.

// var is declared globally, and locally if inside of a function. let is limited to the block statement or expression in which it was declared. An example from freecodecamp. 

function checkScope() {
  "use strict"; 
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is " + i);
  }
  console.log("Function scope i is " + i);
  return i;
}

checkScope();

// Using let instead of var

function checkScopeLet() {
  "use strict"; 
  let i = "function scope";
  // The scope of this let is only within the block of the following function, and uses the value inside, because of using let
  if (true) {
    let i = "block scope";
    console.log("Block scope i is " + i);
  }
// Now, the scope is back to the overarching checkScopeLet() scope, and uses the valuie within that
  console.log("Function scope i is " + i);
  return i;
}

checkScopeLet();