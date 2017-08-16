/*jshint esversion: 6 */

function singleNote() {

  let list = new List();
  list.newNote('Foo');

  console.log('Initialise - List: ');
  assert.isEqual(typeof list._notes, 'object', 'Is an object');
  assert.isEqual(list._notes[0]._text, 'Foo', 'Contains a note');
  assert.isNotEmpty(list._notes[0]._text, 'Is not empty');
}

singleNote();
