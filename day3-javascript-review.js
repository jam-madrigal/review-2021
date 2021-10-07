// Say we have an object nested within another object, and we want to access it. It's confusing at first, but fairly straightforward dot notation as usual. Just follow the trail. Remember to use bracket notation if the key/property string contains a space, or if we want to pass in a variable, that resolves to a string, representing a key/value. No dot is required before the bracket.

var myHome = {
  "bedroom": {
    "inside": {
      "hidden closet": "witch hat",
      "dresser": "robes",
    },
    "outside": {
      "yard": "impish fountain",
      "door": "pentagram",
    },
  }
};

// To find what is inside the bedroom closet in the myHome object, and log it

var closetContents = myHome.bedroom.inside["hidden closet"];
console.log(closetContents);

// Let's combine bracket and dot notation to access array inside of objects.. inside of objects. Remember to add the semicolon after the array of objects. (Which is essentially a JSON file)

var myStuff = [
    {
      type: "magical artifacts",
      list: [
        "staff",
        "book",
        "occult necklace"
      ]
    }, 
    {
      type: "clothes",
      list: [
        "robes",
        "witch hat",
        "boots"
      ]
    }
];

// Accessing index 1 in the list of clothes (which is index 1 of myStuff), which should be "witch hat".

var headwear = myStuff[1].list[1];
console.log(headwear);
