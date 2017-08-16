/*jshint esversion: 6 */

(function(exports) {
  function stringChecker() {

    let note = new Note("Foo");

    console.log('A new note: ');
    assert.isEqual(note.textReturn(), "Foo", "Matches it's input");
    assert.isString(note.textReturn(), 'Is a string');
    assert.isNotEmpty(note.textReturn(), 'Is not empty');
  }
  stringChecker();
})(this);
