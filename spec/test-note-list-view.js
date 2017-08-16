/*jshint esversion: 6 */

function singleNoteHtml() {

  let list = new List();
  let view = new View(list);
  list.newNote('Foo');

  console.log("Initialise - View: ");
  assert.isEqual(view.printHtml(), "<ul><li>Foo</li></ul>", 'Can output HTML');
  assert.isString(view.printHtml(), 'Is a string');
}

function multipleNoteHtml() {

  let list = new List();
  let view = new View(list);
  list.newNote('Foo');
  list.newNote('Bar');

  assert.isNotEmpty(view.printHtml(), 'Is not empty');
  assert.isEqual(view.printHtml(), "<ul><li>Foo</li><li>Bar</li></ul>", 'Can output multiple lines of HTML');
}

function noNoteHtml() {

  let list = new List();
  let view = new View(list);

  assert.isEqual(view.printHtml(), "<ul></ul>", 'Can output empty HTML');
}

singleNoteHtml();
multipleNoteHtml();
noNoteHtml();
