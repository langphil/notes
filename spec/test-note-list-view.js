(function(exports) {
  function singleNoteHtml() {
    console.log("A list view: ");

    let list = new List();
    let view = new View(list);
    list.newNote('Foo');

    assert.isEqual(view.printHtml(), "<ul><li>Foo</li></ul>", 'Can output HTML');
    assert.isString(view.printHtml(), 'Is a string');

  }
  singleNoteHtml();
})(this);

(function(exports) {
  function multipleNoteHtml() {

    let list = new List();
    let view = new View(list);
    list.newNote('Foo');
    list.newNote('Bar');

    assert.isNotEmpty(view.printHtml(), 'Is not empty');
    assert.isEqual(view.printHtml(), "<ul><li>Foo</li><li>Bar</li></ul>", 'Can output multiple lines of HTML');

  }
  multipleNoteHtml();
})(this);

(function(exports) {
  function noNoteHtml() {

    let list = new List();
    let view = new View(list);

    assert.isEqual(view.printHtml(), "<ul></ul>", 'Can output empty HTML');

  }
  noNoteHtml();
})(this);
