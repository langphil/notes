/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function Controller(list) {
    this._view = new View(list);
  }

  Controller.prototype.outputHTML = function() {
    document.getElementById("notes").innerHTML = this._view.printHtml();
  };

  Controller.prototype.makeUrlChangeNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  Controller.prototype.showNoteForCurrentPage = function() {
    controller.showURL(controller.getNoteFromURL(window.location));
  };

  Controller.prototype.getNoteFromURL = function(location) {
    let id = location.hash.split("/")[1];
    return this._view._list.returnNotes()[id].textReturn();
  };

  Controller.prototype.showURL = function(note) {
    document
      .getElementById("notes").innerHTML = note;
  };

  Controller.prototype.postTextContent = function () {
    document
      .getElementById("submit")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        controller.postText(clickEvent);
    });
  };

  Controller.prototype.postText = function(clickEvent) {
    console.log("Submit button was clicked")
    console.log(clickEvent);
    console.log(document.getElementById("textarea").value);
  };

  exports.Controller = Controller;
})(this);
