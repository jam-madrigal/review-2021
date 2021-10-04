let number = 5; // this is an  in-line comment and won't run, in-line means it's at the end of code
console.log(number);

/* this is a multi line comment
booby
dumbobug
poop
*/

number = 9;

console.log(number);

/* undefined means not declared
null means nothing
boolean means true or false, 0 or 1
string is text
number is number...
a symbol is an "immutable primitive value that is unique"
an object has lots of key value pairs {}
*/

let Booby = "humbadumba";

console.log(Booby);

Booby = "nothumbadumba";

console.log(Booby);

// var can be used within the whole program, let only in the scope in which that was declared, const should and can't ever change after being declared

// end all lines with a semicolon, though they can be skipped, but it should be included to be obvious

// you no longer have to declare a variable after it is declared, you can just variable = thisnow

var a; // declares a
a = 9; // = 9 initializes variable

// can be done in one line, var a = 9; (declared and initialized at the same time)

/* Variable names are case sensitive in javascript, so var A is not the same as var a

good practice to use "camelCase", first letter is lower case, next parts of the variable are capitalized like above*/

var camelCase = "likeThis, Notlikethis";

console.log(camelCase);

// adding numbers, subtracting numbers (-), multiplication (*), division(/), obvious...
let sum = 10 + 10;
console.log(sum);

// increment a variable
sum = sum + 1;
console.log(sum)
// or, you can increment easier like this (decrementing works the same, just use - or --)
sum++;
console.log(sum);

// decimal numbers are sometimes referred to as "floating point numbers" or "floats" and work the same as integers in the applications above

// % is the remainder operator, for example to find the remainder of 11/3
var remainder = 11 % 3;
console.log(remainder); //remainder of 2 logged in console

// let's add to the sum from earlier, instead of doing
sum = sum + 2;
console.log(sum);
// We can shorten that, with the += operator, like I used in the password generator project when adding more strings to the existing password based on other parameters from the user, -= will do the same thing with subtraction, also works with *= and /=
sum += 2;
console.log(sum);

// Strings can be declared like so which I already did, "" or '', or ``

var stringaDinga = "Words";
console.log(stringaDinga);

// If your string contains quotes in it, then you can use an escape character (\) to make the next quotation mark not be read as the end of the string, like so:
var myStr = "This is a \"double quoted string\".";
console.log(myStr);

// Of course, instead of using an escape character, simply use single quotes, as we've done before

myStr = '"This is a "double quoted string".';
console.log(myStr);
// You can also use backticks `` instead to have both single and double quotes inside
myStr = `"This is a 'double quoted string'."`;
console.log(myStr);

/*****
More escape characters
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*****/

// Concatenating strings just means adding them together
var conCat = "First this. " + "Then this.";
console.log(conCat);
// You can also += like normal with numbers
conCat = "First this. ";
conCat += "Now this too.";
console.log(conCat);
// You can also concatenate with the variables

var myName = "Witch "; // space after to be clean when combining without having to + " " to add a space
var myLastName = "Lacrimosa";
var fullName = "I am the powerful " + myName +  myLastName + ".";
console.log(fullName);

// += also applies here as well

console.log(myName += myLastName);

// To find the length of a string, use .length, which now has our full name length after concatenating the first and last names on line 119

console.log(myName.length); // includes the space, so 15 instead of 14

// of course we start counting at 0, like in arrays, and we can log a specific index of a string, too, like an array, so let's log the first letter of our name, W, then the second letter of the last name, a

console.log(myName[0]);
console.log(myLastName[1]);

/* strings are immutable, meaning they cannot be altered once created, this doesn't mean they cannot be changed, but that individual characters of the "string literal" cannot be changed, so let's say we made a typo

let myStr = "Jello World";
myStr[0] = "H"; <-- this cannot work and will return an error, we would have to myStr = "Hello world." and change the whole thing */

// Let's find the last letter of my name, using bracket notation like an array, it should be a in "Lacrimosa"
var lastLetterOfName = myName[myName.length - 1]; 
console.log(lastLetterOfName);

// We have to use -1, (-2 or -3 to find second and third to last and so on) because the counting of the indexes (indices?) starts at 0, so otherwise we would be returning something undefined

// Let's make a basic function that can take in strings as parameters and make a basic sentence if the structure is followed

function sillySentence(theAdjective, theNoun, theVerb, theAdverb) {
  let result = "The " + theAdjective + " " + theNoun + " " + theVerb + " " + theAdverb + ".";

  return result;
};

console.log(sillySentence("fat", "cat", "ate", "lasagna"));

// Array basics, arrays can have any data type, and are formatted like so

let theArray = ["String", 5];
console.log(theArray);

// You can also have an array within an a array, called a nested array or multi-dimensional array, I think they're easier to read with some spacing at the starts and ends.. but I don't see that usually

let nestArray = [ [1, 2], ["string", "string2"] ];
// Each index is an array with elements of its own, let's log index 1 of the first array within the nestArray
let nestArrayOne = nestArray[0];
console.log(nestArrayOne);
console.log(nestArrayOne[1]);
// Or, like this
console.log (nestArray[0][1])

// You can modify an index of an array, like so
let modArray = [1, 2, 3];
modArray[1] = 45;
console.log(modArray[1]);

// Append data to the end of an array with the push() function, you can even push an array into an array, it will just add it to the end and become the last index

modArray.push("newAppend");
modArray.push(["new Array", 1]);
console.log("logging the modArray here:");
console.log(modArray);

// Now let's remove that extra array because it's confusing and I hate it, using the pop() function, which will initialize out the last index into its own variable which we declare

var dumbRemovedArray = modArray.pop();
console.log("dumbRemovedArray, using pop() on modArray to get this next array");
console.log(dumbRemovedArray);
console.log("edited modArray, after using pop()");
console.log(modArray);
// As you can see, the last index, our pushed array, was removed and stored in its own variable
// the shift() function is the same as pop, but it removes from the start of the array instead of the end
console.log("shifting the modArray");
var shiftedArray = modArray.shift();
console.log(shiftedArray);

//unshift() is like push(), but it adds to the start of the array, so let's add the 1 (it could be anything else, too) back into the modarray
console.log("unshifting the 1 back into the modarray");
modArray.unshift(1);
console.log(modArray);

/* About scope
- Scope refers to the visiblity of variables. 
- Variables which are declared outside of a function block can be seen and used everywhere in the javascript code
- If you declare a variable (var, let, const) within a function it will only be seen within that function, and cannot be called outside of said function
-- However, if you use no keyword like var, it becomes a global variable automatically, when declared initially within a function, be careful with how you want to declare variables because of this
*/