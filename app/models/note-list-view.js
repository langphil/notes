/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function View(list) {
    this._list = list;
  }

  View.prototype.printHtml = function() {
    let html = "<ul>";
    this._list._notes.map( function(note) {
      const text = note._text.substr(0, 20);
      html += "<li>" + text + "</li>";
    });
    return html += "</ul>";
  };

  exports.View = View;
})(this);
