(function(exports) {
  function stringChecker() {

    var note = new Note("Foo");

    assert.isTrue(note.textReturn() === "Foo");
    assert.isTrue(typeof note.textReturn() === 'string');
    assert.isTrue(note.textReturn() !== '');
  }
  stringChecker();
})(this);
