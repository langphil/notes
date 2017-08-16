(function(exports) {
  function noteController() {
    var feedback = "has a list item"
    var list = { newNote: function() {}, _notes: [] }
    var controller = new Controller(list);
    assert.isTrue(controller, feedback)
  }

  exports.noteController = noteController();
})(this);
