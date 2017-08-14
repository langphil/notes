(function(exports) {
  function htmlPrint() {

    var view = new View();
    var note = new Note("Foo");
    
    if(view.print !== "<ul><li><div>Foo</div></li></ul>") {
      throw new Error("No HTML is present");
    }
  }
  htmlPrint();
})(this);
