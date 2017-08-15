(function(exports) {
  function singleNote() {

    var list = new List();
    list.newNote('Foo');

    assert.isTrue(typeof list._notes === 'object');
    assert.isTrue(list._notes[0]._text === 'Foo');
    assert.isTrue(list._notes[0]._text !== '');
  }
  singleNote();
})(this);
