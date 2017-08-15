(function(exports) {
  function singleNoteHtml() {

    var list = new List();
    list.newNote('Foo');
    var view = new View(list);

    assert.isEqual(view.printHtml(), "<ul><li>Foo</li></ul>");
    assert.isString(view.printHtml());

  }
  singleNoteHtml();
})(this);

(function(exports) {
  function multipleNoteHtml() {

    var list = new List();
    list.newNote('Foo');
    list.newNote('Bar');
    var view = new View(list);

    assert.isEqual(view.printHtml(), "<ul><li>Foo</li><li>Bar</li></ul>");
    assert.isNotEmpty(view.printHtml());

  }
  multipleNoteHtml();
})(this);

(function(exports) {
  function noNoteHtml() {

    var list = new List();
    var view = new View(list);

    assert.isEqual(view.printHtml(), "<ul></ul>");

  }
  noNoteHtml();
})(this);
