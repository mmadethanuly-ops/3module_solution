/**
 * utils.js
 * Utility library that exposes sayHello and sayGoodbye functions
 * via a global `BasicUtils` object.
 */

(function (global) {

  var BasicUtils = {};

  /**
   * sayHello: returns "Hello <name>" string
   */
  BasicUtils.sayHello = function (name) {
    if (typeof name !== "string") {
      return "Hello undefined";
    }
    return "Hello " + name;
  };

  /**
   * sayGoodbye: returns "Goodbye <name>" string
   */
  BasicUtils.sayGoodbye = function (name) {
    if (typeof name !== "string") {
      return "Goodbye undefined";
    }
    return "Goodbye " + name;
  };

  // Expose BasicUtils to the global scope
  global.BasicUtils = BasicUtils;

})(window);
