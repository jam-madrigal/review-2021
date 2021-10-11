// Run this file to test exporting and importing

/* *******IMPORTANT NOTE******* 
Since we are not using a module for these files, we have to save them as .mjs files in order to get them to work. Normally, they would just be normal .js files and we would not have to specify that in the import statement, as "./exports" would by default be assumed to be a .js file. Running them the normal way without using .mjs files will return errors, in this specific directory and how it is set up.
*******END IMPORTANT NOTE******* */

import { exportedMagic } from "./exports.mjs";
  
const favoriteSpell = `My favorite spell is ${exportedMagic}`;

console.log(favoriteSpell);