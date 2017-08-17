/*jshint esversion: 6 */

function before() {
  list = new List();
  view = new View(list);
}

function singleNoteHtml() {
  before();
  list.newNote('Foo');

  assert.isEqual(view.printHtml(), '<ul><li><a href="#notes/0">Foo....</a></li></ul>', 'Can output HTML');
  assert.isString(view.printHtml(), 'Is a string');
}

function multipleNoteHtml() {
  before();
  list.newNote('Foo');
  list.newNote('Bar');

  assert.isNotEmpty(view.printHtml(), 'Is not empty');
  assert.isEqual(view.printHtml(), '<ul><li><a href="#notes/0">Foo....</a></li><li><a href="#notes/1">Bar....</a></li></ul>', 'Can output multiple lines of HTML');
}

function noNoteHtml() {
  before();
  assert.isEqual(view.printHtml(), "<ul></ul>", 'Can output empty HTML');
}

function noteLength() {
  before();
  list.newNote('FooFooFooFooFooFooFooFooFooFooFooFooFoo');
  assert.isEqual(view.printHtml(), '<ul><li><a href="#notes/0">FooFooFooFooFooFooFooFooFooFoo....</a></li></ul>', 'Restricts note to 30 characters');
}

console.log("Initialise - View: ");
singleNoteHtml();
multipleNoteHtml();
noNoteHtml();
noteLength();
