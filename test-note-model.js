(function(exports) {
  function stringChecker() {
    var text = new Note(text);
    if(text.text_return !== "" && typeof text.text_return !== 'string') {
      throw new Error("This is not a note");
    }
  }
  stringChecker();
})(this);
