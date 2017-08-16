(function(exports) {
  function Controller(list) {
    list.newNote('Remember to eat plastic things')
    this._view = new View(list);
  }

   Controller.prototype.outputHTML = function() {
    document.getElementById("notes").innerHTML = view.printHtml();
  };

  exports.Controller = Controller;
})(this);
