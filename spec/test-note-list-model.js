(function(exports) {
  function singleNote() {
    console.log('A new list: ');

    let list = new List();
    list.newNote('Foo');

    assert.isEqual(typeof list._notes, 'object', 'Is an object');
    assert.isEqual(list._notes[0]._text, 'Foo', 'Contains a note');
    assert.isNotEmpty(list._notes[0]._text, 'Is not empty');
  }
  singleNote();
})(this);
