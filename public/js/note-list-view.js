(function(exports) {
  function View(list) {
    this._list = list;
  }

  View.prototype.printHtml = function() {
    html = "<ul>";
    this._list._notes.forEach( function(note) {
      html += "<li>" + note._text + "</li>";
    });
    return html += "</ul>";
  };

  exports.View = View;
})(this);
