(function(exports) {
  function htmlPrint() {

    var list = new List();
    list.newNote('Foo');
    var view = new View(list);
    
    if(view.print() !== "<li>Foo</li>") {
      throw new Error("No HTML is present");
    }
  }
  htmlPrint();
})(this);
