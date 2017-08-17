/*jshint esversion: 6 */

function singleNoteHtml() {
  const list = new List();
  const view = new View(list);
  list.newNote('Foo');

  assert.isEqual(view.printHtml(), "<ul><li>Foo</li></ul>", 'Can output HTML');
  assert.isString(view.printHtml(), 'Is a string');
}

function multipleNoteHtml() {
  const list = new List();
  const view = new View(list);
  list.newNote('Foo');
  list.newNote('Bar');

  assert.isNotEmpty(view.printHtml(), 'Is not empty');
  assert.isEqual(view.printHtml(), "<ul><li>Foo</li><li>Bar</li></ul>", 'Can output multiple lines of HTML');
}

function noNoteHtml() {
  const list = new List();
  const view = new View(list);

  assert.isEqual(view.printHtml(), "<ul></ul>", 'Can output empty HTML');
}

function noteLength() {
  const list = new List();
  const view = new View(list);
  list.newNote('FooFooFooFooFooFooFooFoo');
  
  assert.isEqual(view.printHtml(), '<ul><li>FooFooFooFooFooFooFo</li></ul>', 'Restricts note to 20 characters');
}

console.log("Initialise - View: ");
singleNoteHtml();
multipleNoteHtml();
noNoteHtml();
noteLength();
