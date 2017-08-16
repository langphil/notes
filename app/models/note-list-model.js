"use strict";

(function(exports) {
  function List() {
    this._notes = [];
  }

  List.prototype.returnNotes = function() {
    return this._notes;
  };

  List.prototype.newNote = function(text) {
    this._notes.push(new Note(text));
  };

  exports.List = List;
})(this);
