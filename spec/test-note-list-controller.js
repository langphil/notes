/*jshint esversion: 6 */

function noteController() {

  const list = { newNote: function() {}, _notes: [] };
  const controller = new Controller(list);

  assert.isObject(controller, "Is an object");
}

function htmlController() {

  const list = {
    newNote: function() { return 'foo' }
  };
  const noteController = new Controller(list);
  noteController.outputHTML = function() {
    return '<ul><li>foo</li></ul>';
  };
  
  assert.isEqual(noteController.outputHTML(), '<ul><li>foo</li></ul>', "Can send HTML to the DOM");
}

console.log("Html output - List of notes: ");
noteController();
htmlController();
