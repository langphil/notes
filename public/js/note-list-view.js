(function(exports) {
  function View(list) {
    this._list = list;
  }

  View.prototype.print = function() {
    html = "";
    view._list._notes.forEach( function(note) {
      html += "<li>" + note._text + "</li>";
    });
    return html;
  };

  exports.View = View;
})(this);