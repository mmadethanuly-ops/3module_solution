/**
 * script.js
 * Main script for Module 4 Assignment.
 *
 * Task:
 *  - Loop over an array of names.
 *  - If the name starts with 'j' or 'J' → print "Goodbye <name>"
 *  - Otherwise → print "Hello <name>"
 *
 * Uses:
 *  - BasicUtils.sayHello(name)    from js/utils.js
 *  - BasicUtils.sayGoodbye(name)  from js/utils.js
 *  - NameChecker.startsWithJ(name) from js/iiffyUtility.js
 */

(function () {

  // Array of names to loop over
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Lisa",
    "Jessica",
    "Mitch"
  ];

  // Loop over each name and print Hello or Goodbye
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    if (NameChecker.startsWithJ(name)) {
      console.log(BasicUtils.sayGoodbye(name));
    } else {
      console.log(BasicUtils.sayHello(name));
    }
  }

})();
