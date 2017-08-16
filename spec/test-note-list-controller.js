/*jshint esversion: 6 */

function noteController() {

  let list = { newNote: function() {}, _notes: [] };
  let controller = new Controller(list);

  console.log("Note controller: ");
  assert.isObject(controller, "Is an object");
}


function htmlController() {
  var list = {
    newNote: function() { return 'foo' }
  };
  var noteController = new Controller(list);
  noteController.outputHTML = function() {
    return '<ul><li>foo</li></ul>';
  };
  assert.isEqual(noteController.outputHTML(), '<ul><li>foo</li></ul>', "Can send HTML to the DOM");
}

noteController();
htmlController();
