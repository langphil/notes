var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: assertion is" + assertionToCheck);
    }
  },
  isString: function(assertionToCheck) {
    if (typeof assertionToCheck !== 'string') {
      throw new Error("Assertion failed: assertion is" + assertionToCheck);
    }
  },
  isNotEmpty: function(assertionToCheck) {
    if (assertionToCheck === '') {
      throw new Error("Assertion failed: assertion is" + assertionToCheck);
    }
  },
  isEqual: function(arg1, arg2) {
    if (arg1 != arg2) {
      throw new Error("Assertion failed: assertion is" + assertionToCheck);
    }
  }
};
