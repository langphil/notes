"use strict";

(function(exports) {
  function View(list) {
    this._list = list;
  }

  View.prototype.printHtml = function() {
    let html = "<ul>";
    this._list._notes.map( function(note) {
      html += "<li>" + note._text + "</li>";
    });
    return html += "</ul>";
  };

  exports.View = View;
})(this);
