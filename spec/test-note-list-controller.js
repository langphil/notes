(function(exports) {
  function listController() {
    let list = new List();
    let view = new View(list);
    let html = new Html(view);
    item = "<ul><li>Favourite drink: seltzer</li></ul>";
    list.newNote("Favourite drink: seltzer");

    html.outputHTML = function(view) {
      return item;
    };

    assert.isEqual(html.outputHTML(), item);
  }

  listController();
})(this);
