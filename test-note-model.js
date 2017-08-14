(function(exports) {
  function string() {
    var text = new Note("");
    if(text.text !== "") {
      throw new Error("This is not a note");
    }
  }
  string();
})(this);
