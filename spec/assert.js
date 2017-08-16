var assert = {
  isTrue: function(assertionToCheck, message) {
    if (!assertionToCheck) {
      console.log("%c Failed: " + message, 'color: red;');
    } else {
      console.log("%c Passed: " + message, 'color: green;');
    }
  },
  isString: function(assertionToCheck, message) {
    if (typeof assertionToCheck !== 'string') {
      console.log("%c Failed: " + message, 'color: red;');
    } else {
      console.log("%c Passed: " + message, 'color: green;');
    }
  },
  isObject: function(assertionToCheck, message) {
    if(typeof assertionToCheck !== 'object') {
      console.log("%c Failed: " + message, 'color: red');
    } else {
      console.log("%c Passed: " + message, 'color: green;');
    }
  },
  isNotEmpty: function(assertionToCheck, message) {
    if (assertionToCheck === '') {
      console.log("%c Failed: " + message, 'color: red;');
    } else {
      console.log("%c Passed: " + message, 'color: green;');
    }
  },
  isEqual: function(arg1, arg2, message) {
    if (arg1 !== arg2) {
      console.log("%c Failed: " + message, 'color: red;');
    } else {
      console.log("%c Passed: " + message, 'color: green;');
    }
  }
};
