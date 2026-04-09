/**
 * iiffyUtility.js
 * IIFE-based utility that exposes a `NameChecker` object
 * with a `startsWithJ` method.
 */

(function (global) {

  var NameChecker = {};

  /**
   * startsWithJ: returns true if the given name starts with
   * the letter 'j' or 'J', false otherwise.
   */
  NameChecker.startsWithJ = function (name) {
    if (typeof name !== "string" || name.length === 0) {
      return false;
    }
    var firstLetter = name.charAt(0).toLowerCase();
    return firstLetter === "j";
  };

  // Expose NameChecker to the global scope
  global.NameChecker = NameChecker;

})(window);
