// Const works the same as let, but it is read only. It cannot be reassigned. Always use const if you know you are not going to reassign the variable, lest mistakes be made. Notice how the example cannot be reassigned and returns an error, if the reassignment is uncommented. It is also common to use all capital letters to remember that it is a constant.

const CONSTANT = "Hello";

// CONSTANT = "Goodbye";

console.log(CONSTANT);

// let should be the most commonly used declaration, as of ES6, as a good practice

// Though a const variable cannot be mutated, an array can be with bracket notation. Uncomment the line in the following code to see what will and won't work.

const cArray = ["bip", "bop", "boop"];

function editConstArray() {
  "use strict";
  
  // cArray = ["bing", "bop", "boop"];
  cArray[0] = "bing";
  console.log(cArray);
}

editConstArray();

// An object can also be mutated, despite being declared with const.

// Here is a free code camp example. Uncomment the Object.freeze() function to see.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  // Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);

// Anonymous functions are functions that are, well, anonymous. They do not have names, but may be declared to a variable like so. Another direct freecodecamp example.

var magic = function() {
  return new Date();
};

// These can be converted to (fat) arrow functions to make them easier to read and write.

var magic = () => {
  return new Date();
};

// They can be further shortened if you are only returning one value like so. The return keyword is no longer necessary and neither are the curly braces.

const MAGIC = () => new Date();

// Paremeters can also be passed in in (fat) arrow functions.

const ARROWCONCAT = (arr1, arr2) => arr1.concat(arr2);

console.log(ARROWCONCAT([1, 2], [3, 4, 5]));

// Whenever a function takes in another function as an argument, that is a good place to use a (fat) arrow function, for example in .map() and .filter()

// To set a default value in a function, you can simply initialize an argument in the function. Below, this will make the function use a default value of one if no parameter is passed through. Without the = 1, the secsond console.log() would be undefined.

const increment = (number, value = 1) => number + value;

console.log(increment(5, 3));
console.log(increment(5));

// Rest operators represented by ... allow you to have a function with a variable amount of parameters/arguments

// The spread operator is also 3 dots, just like the rest operator, and it takes an array and spreads it out into its individual parts. It can only be used as an argument in a function or in an array literal.

// In this example, if you were to write arr2 = arr1 to try and get a copy, it would just make arr2 a variable that is the same as arr1, and it would return the adjusted arr1[0] as 5. However, since we used a spread operator, it's making arr2 a copy of arr1 bfore is mutated, and we get the a copy of the original array as a separate array as arr2. Change it to arr2 = arr1 to see.

// Day 5 part 2
const arr1 = [1, 2, 3];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = 5;
})();
console.log(arr2);

// Destructuring objects.
// Below will have an object, and the old way of assigning each value of the object to a variable. 

var myObject = {
  a : 1,
  b : 2,
  c : 3
}

var a = myObject.a;
var b = myObject.b;
var c = myObject.c;

// Instead, we can clean it up like this:

const { a : x, b : y, c : z} = myObject;

// The variable after the = tells it from which object to pull the items, and the "key" value we want to turn into the new variable, which is like the value in the destructuring curly braces. a is the value of myObject.a and we want to turn it into the x variable. It's kind of like streamlined dot notation. x = myObject.a, but all in one format with everything else you want to declare and initialize from the object in the same curly braces. It's one of those things that is easy to understand when reading it, more than it is easy to explain. 

// Another one of those things in code that is like a roadmap to read. Just follow the steps and don't be intimidated. Start at myObject, then you know in the first pair, we're taking the data from myObject.a, and that is becoming the variable x. This is the logic it follows. You can also think of it as var x = myObject.a, and follow that progression in this order visually to connect the dots, it's really the best way to do it. Even drawing arrows and saying what logic it's following out loud makes it understandable.

// I find it easier to think it through and write it as const {} = myObject, which means we're pulling data from the myObject object, and then fill in the rest, thinking okay, I want the myObject.a value, so now we get const { a  } = myObject, then we want to store that in a variable x, so we add : x and get const { a: x } = myObject

// console logging both x and a should return the same value, if we destructured correctly with both formats.

console.log(a);
console.log(x);
