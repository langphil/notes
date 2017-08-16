/*jshint esversion: 6 */

function noteController() {

  let list = { newNote: function() {}, _notes: [] };
  let controller = new Controller(list);

  console.log("Html output - List of notes: ");
  assert.isObject(controller, "Is an object");
}

function htmlController() {

  let list = {
    newNote: function() { return 'foo' }
  };

  let noteController = new Controller(list);
  noteController.outputHTML = function() {
    return '<ul><li>foo</li></ul>';
  };
  assert.isEqual(noteController.outputHTML(), '<ul><li>foo</li></ul>', "Can send HTML to the DOM");
}

noteController();
htmlController();
