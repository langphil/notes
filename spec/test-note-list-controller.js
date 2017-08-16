(function(exports) {
  function noteController() {

    var feedback = "Is an object";
    var list = { newNote: function() {}, _notes: [] };
    var controller = new Controller(list);
    console.log(controller);

    assert.isObject(controller, feedback);
  }

  noteController();
})(this);
