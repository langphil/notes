/*jshint esversion: 6 */

function stringChecker() {

  let note = new Note("Foo");

  console.log('Initialise - Note: ');
  assert.isEqual(note.textReturn(), "Foo", "Matches it's input");
  assert.isString(note.textReturn(), 'Is a string');
  assert.isNotEmpty(note.textReturn(), 'Is not empty');
}

stringChecker();
