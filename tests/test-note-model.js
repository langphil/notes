(function(exports) {
  function stringChecker() {
    
    var text = new Note("FOO");

    if(text.textReturn == "" && typeof text.textReturn !== 'string') {
      throw new Error("There is an issue with your note");
    }
  }
  stringChecker();
})(this);
