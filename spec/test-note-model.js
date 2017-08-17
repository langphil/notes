/*jshint esversion: 6 */

function stringChecker() {
  const note = new Note("Foo");

  assert.isEqual(note.textReturn(), "Foo", "Matches it's input");
  assert.isString(note.textReturn(), 'Is a string');
  assert.isNotEmpty(note.textReturn(), 'Is not empty');
}

function hasAnId() {
  const list = new List();
  const note_one = list.newNote('Foo');
  const note_two = list.newNote('Bar');

  assert.isEqual(list.returnNotes()[0].returnId(), 0, 'Has the correct Id (1)');
  assert.isEqual(list.returnNotes()[1].returnId(), 1, 'Has the correct Id (2)');
}

console.log('Initialise - Note: ');
stringChecker();
hasAnId();
