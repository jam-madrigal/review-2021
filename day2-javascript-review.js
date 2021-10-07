// A side note about functions I looked up, because I was curious. Function declarations do not need semicolons after them. This is because it is not a statement, specifically. A function declaration is also evaluated before the code really executes, and this is what is meant by "hoisting". However, function expressions should be ended with semicolons. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function for great info.

// *Expressions themselves, while I use them all the time, are actually something that there is a lot more to explore in understanding what they really are in computer science and are worth reading into.

// All comparison operators actually return a boolean (true or false) value. This means that in a function, we don't actually have to use an if else statement if we just want to compare two values, like if a is less than b, like so:

function isLess (a, b) {
    return (a < b);
  }
  
  console.log(isLess(13,37));
  console.log(isLess(37, 13));
  
  // You can return out of a function at any time, so let's edit the above example to do that if the numbers are equal, even though we could return something more useful, just for demonstration.
  
  function isLessReturn (a, b) {
    if (a = b){
      return undefined;
    } 
    return (a < b);
  }
  
  console.log(isLessReturn(3,3));
  
  // Flexing the object syntax muscles by creating an object for my cat.
  
  var myCat = {
    "name": "Dio",
    "age": "2 years",
    "color": "Tabby-like",
    "personality": "lazy, picky, but very confident and friendly",
    "is fed": "depends on if he feels picky"
  
  }
  
  // Accessing the values of the cat variable with dot notation and writing it in such a way that any values can make a cohesive sentence. Fun fun.
  
  console.log(
  "My cat is named " + myCat.name + ".", 
  "He is " + myCat.age + " old.", 
  "He has " + myCat.color + " fur.", 
  "He is " + myCat.personality + ".",
  );
  
  // And bracket notation, which is required for properties/keys that have spaces in them
  console.log(myCat["is fed"]);
  
  // Values in objects can be named simply by doing things like myCat.name = newvaluegoeshere
  
  // Dot notation or bracket notation can also add new properties/keys
  
  myCat.mood = "relaxed";
  myCat["isSleepy"] = true;
  myCat['isFat'] = true
  
  console.log(myCat.mood, myCat['isSleepy'], myCat.isFat);
  
  // Deleting a property is simple. just use the delete keyword
  
  delete myCat.isFat;
  
  console.log(myCat['isFat']);
  
  // It is now undefined
  
  // Making a function to look up properties of my cat within an object
  
  function catLookup(val) {
    var catStat = myCat[val];
  
    return catStat;
  }
  
  console.log(catLookup(["name"]));
  
  // An object can be searched to see if it has a property with hasOwnProperty()
  
  function checkCatProp(propToCheck) {
    if (myCat.hasOwnProperty(propToCheck)) {
      return myCat[propToCheck];
    } else {
      return "Property does not exist.";
    }
    }
  
  console.log(checkCatProp('litter box'));
  console.log(checkCatProp('mood'));
  