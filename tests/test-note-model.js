(function(exports) {
  function stringChecker() {

    var note = new Note("Foo");

    assert.isEqual(note.textReturn(), "Foo");
    assert.isString(note.textReturn());
    assert.isNotEmpty(note.textReturn());
  }
  stringChecker();
})(this);
