/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function Controller(list) {
    list.newNote('Remember to eat plastic things');
    this._view = new View(list);
  }

   Controller.prototype.outputHTML = function() {
    document.getElementById("notes").innerHTML = this._view.printHtml();
  };

  exports.Controller = Controller;
})(this);
