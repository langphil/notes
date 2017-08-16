(function(exports) {
  function stringChecker() {
    console.log('A new note: ');

    let note = new Note("Foo");

    assert.isEqual(note.textReturn(), "Foo", "Matches it's input");
    assert.isString(note.textReturn(), 'Is a string');
    assert.isNotEmpty(note.textReturn(), 'Is not empty');
  }
  stringChecker();
})(this);
