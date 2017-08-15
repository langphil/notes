(function(exports) {
  function singleNoteHtml() {

    let list = new List();
    let view = new View(list);
    list.newNote('Foo');

    assert.isEqual(view.printHtml(), "<ul><li>Foo</li></ul>");
    assert.isString(view.printHtml());

  }
  singleNoteHtml();
})(this);

(function(exports) {
  function multipleNoteHtml() {

    let list = new List();
    let view = new View(list);
    list.newNote('Foo');
    list.newNote('Bar');

    assert.isEqual(view.printHtml(), "<ul><li>Foo</li><li>Bar</li></ul>");
    assert.isNotEmpty(view.printHtml());

  }
  multipleNoteHtml();
})(this);

(function(exports) {
  function noNoteHtml() {

    let list = new List();
    let view = new View(list);

    assert.isEqual(view.printHtml(), "<ul></ul>");

  }
  noNoteHtml();
})(this);
