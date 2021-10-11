// Destructuring can also be used for nested objects, like so. 

// Creating an object with objects inside of it

const OCCULT_STUFF = {
    clothes: {head: "pointy hat", torso: "robes"},
    weapons: {main_hand: "staff", off_hand: "catalyst"}
  }
  
  // We want to create a function to get a specific value within an object inside the OCCULT_STUFF object
  
  function getMainWeapon(trinkets) {
    "use strict"
  
    const {weapons : {main_hand : mainWeapon }} = trinkets;
  
    return mainWeapon;
  }
  
  console.log(getMainWeapon(OCCULT_STUFF));
  
  // Destructuring can also be used to assign elements in an array into variables
  
  const [a, b, , , d] = [1, 2, 3, 4, 5];
  
  console.log(a, b, d);
  
  // Notice how you can use empty spaces separated by commas to skip certain elements in the array. Destructuring like this always assigns the variables in order, so if you want to get a value out of order, this must be done. You can also start with spaces and commas. The rest operator can also be used here to get the full array.
  
  // Destructuring can also switch the places of variables
  let x = 13, y = 37;
  console.log(x, y);
  
  // Running an anonymous function immediately as we declare it to swap the values of x and y
  
  // Another example from freecodecamp of how we can use destructuring to pass certain values from an object as parmeters in functions, which is common with api calls
  
  (() => {
    "use strict";
    [x, y] = [y, x];
  })();
  
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
  // Instead of passing in the entire stats object here, we can just pass in { max, min }
    return function half(stats) {
      // Then here we can remove the stats., and it will work just the same. More efficient code that trims the fat we don't need.
      return (stats.max + stats.min) / 2.0;
    };
  
  })();
  console.log(stats); 
  console.log(half(stats)); 
  
  console.log(x);
  console.log(y);
  
  // Template literals are one of my favorite things, and can be created with ` They make making strings and passing in values into them a lot easier, and they can have multiple lines as well. In fact, I'm using them right now to copy my code here to Discord to put on another system later since I'm using a code editor in the browser. ${value} can be used to pull variables into the string.
  
  const WITCH = {
    element: "cryo",
    personality: "moody"
  }
  
  const WITCH_DESC = `The ${WITCH.element}-specialized witch was very ${WITCH.personality}.`
  
  console.log(WITCH_DESC);

  // We can write concise object declarations using "simple fields" 

/* const newMagician = (name, element, weapon) => {
  return {
    name: name,
    element: element,
    weapon: weapon
  }
} */

// We can simplify the above comment like so, and they will return the same results.

const newMagician = (name, element, weapon) => ( { name, element, weapon });

console.log(newMagician("Thadeus", "Water", "Lumpy staff"));

// An object can contain a function. Let's look at a couple freecodecamp exmaples of the long and short ways of doing this.

// Short way, with the long way in comments.
const bicycle = {
  gear: 2,
  /* setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  } */
    setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// The class syntax can be used to define a constructor function

// This is the traditional and old way of doing it

/* var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet) */

// Here is the new and cleaner way

class spaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}

// Let's make both examples with a witch, cause it's me

/* var Witch = function(headwear) {
  this.headwear = headwear;
}

var Witch = new Witch('Witch hat');
console.log(Witch.headwear); */

class Witch {
  constructor(headwear){
  this.headwear = headwear;
  }
}

console.log(new Witch("Witch hat"));


// An example of using getters and setters to access and edit values within an object

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer(){
      return this._author;
    }
    // setter
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
  }
  
  // Making another example with a sorceress this time. Apparently, it is necessary to have the _ before a new value to avoid too much recursion and to inidcate that it should only be accessed within the scope of that object. 
  
  class Sorceress {
    constructor(name, wand, power){
      this.name = name; 
      this.wand = wand; 
      this._power = power;
    }
      // get
      get power() {
        return this._power;
        }
      // set
      set power(newPower) {
        this._power = newPower
      }
  }
  
  // Creating a new sorceress with the sorceress class
  
  var Sorceress1 = new Sorceress("Meta", "shiny", "electricity");
  
  console.log(Sorceress1);
  
  // Setting a new power for the sorceress
  Sorceress1.power = "fire";
  console.log(Sorceress1.power);
  
  // Code can be exported and imported from other files, try creating this code in a file named exports.js when using package.json with type set to module, and this time, .mjs since we are not using that for this review
  
  // Functions can also be exported
  
  // export const exportedMagic = "Fireball";
  
  // In another file, import this const exportedMagic and try creating a literal with the variable, or simply console.logging it from another file, using the following code
  
  // Code blocks can also be exported with that curly brace notation, ie. 
  
  /*const exportedMagic = "Fireball";
   export { exportedMagic }; */
  
  /* import { exportedMagic } from "./exports";
  
  const favoriteSpell = `My favorite spell is ${exportedMagic}`;
  
  console.log(favoriteSpell); */
  
  // To import everything from a file, use the following syntax. import * as Magic FROM "./exports"
  
  // The * selects everything, as tells it what to name the object with all the imports in it, and the file name to be imported is in quotes as usual
  
  // Default exports without names can also be declared with export default exportnamegoeshere 
  
  // To import, do import exportnamegoeshere FROM "filename" and it does not require curly braces around the name of the import in this case, which is a key difference from non-default exports.


