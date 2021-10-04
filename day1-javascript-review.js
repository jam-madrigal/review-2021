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

