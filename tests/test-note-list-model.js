(function(exports) {
  function singleNote() {

    var list = new List();
    list.newNote('Foo');

    assert.isEqual(typeof list._notes, 'object');
    assert.isEqual(list._notes[0]._text, 'Foo');
    assert.isNotEmpty(list._notes[0]._text);
  }
  singleNote();
})(this);
