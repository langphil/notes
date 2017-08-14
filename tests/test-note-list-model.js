(function(exports) {
  function listChecker() {
    
    var list = new List();

    if(typeof list._notes !== 'object') {
      throw new Error("Array storage not working");
    }

    list.newNote("foo");
    if(list._notes[0]._text !== 'foo') {
      throw new Error("Array storage not working");
    }
  }
  listChecker();
})(this);
