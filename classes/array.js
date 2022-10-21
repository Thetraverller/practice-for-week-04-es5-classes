// Your code here
// npm test test/array-spec.js


// Your code here

Array.prototype.isEqual = function(array) {

    for (let i = 0; i < this.length; i++) {
      let el = this[i];
      let arrayEl = array[i];

      if (el !== arrayEl) {
        return false;
      }
    }

    return true;
  }
