/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function View(list) {
    this._list = list;

  }

  View.prototype.printHtml = function() {
    let html = "<ul>";
    const notes = this._list.returnNotes();

    for (var i = 0; i < notes.length; i++) {
      let text = notes[i].textReturn().substr(0, 20);
      const id = notes[i].returnId();
      text = this._createURL(text, id);
      html += "<li>" + text + "</li>";
    }
    return html += "</ul>";
  };

  View.prototype._createURL = function(text, id) {
    return "<a href=\"#notes/" + id + "\">" + text + "</a>";
  };

  exports.View = View;
})(this);
