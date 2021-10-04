// Variables declared within a function, and a function's parameters, have local scope: this means they are only visible in the function, example:

function hoopDoopLocalScope() {
    var localScopeVar = 37;
    console.log(localScopeVar);
  
  }
  hoopDoopLocalScope(); // Will run the function and show 37
  // console.log(localScopeVar);  Will be undefined because that variable is declared in a function, comment it out for now to prevent errors in testing the other review

//  Local and global variables can have the same name: the _local_ variable will take precedent over the global variable

var myHat = "Witch hat: Pointy and magical.";

function showHat() {
    // uncomment this  next line to see the local variable take precedent over the global variable
        myHat = "not a witch hat??";

    console.log(myHat);

/*     or
    return myHat; */

}

showHat();
// this next console log demonstrates the local variable taking precedent over the global variable, and changing the value
console.log(myHat);

/* or
console.log(showHat()); with the return uncommented
 */

// As demonstrated, the function still logs, in the console, the global variable, which in this case is a string.


// In computer science, a cue is an abstract data structure. New items are added to the back of the cue, and old are removed from the front. Items are kept in order in this data structure. The following function will simulate it.

// A function that can accept arguments in the form of an array and a new item to append to the array with push(), while also using shift() to remove an old item from the front

function nextInLine(arr, item) {
    testArray.push(item);
    return arr.shift();

}

var testArray = ["dagger", "staff", "pointy hat", "tome", "robes"];
// Demonstrating how the array looks on its own, logging the item to be removed (console logging the shift function does this) from the front of the array with shift(), and then logging the same array after using the next in line function to add another item to the end. Stringify added just as insurance: in this case it is not necessary because the array is already strings.

console.log("Before: "  + JSON.stringify(testArray));
console.log(nextInLine(testArray, "teardrop"));
console.log("After: ", JSON.stringify(testArray));

// If statements: this is meant to demonstrate booleans, true or false, but all this function does to determine if it was true or false is see if there was a a parameter passed through for the value "wasItTrue". If ANYTHING exists in that as an argument, it will return "It was true", and if not, "It was false". In this application, true/the if statement essentially means yes, something exists as a parameter, and if it's null/blank, it's false. Try putting in different arguments into the test function to illustrate.

function test (wasItTrue) {
    if (wasItTrue) {
        return "It was true";
    }
    return "It was false";
};

console.log(test(true));
console.log(test(false));