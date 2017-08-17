/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function List() {
    this._notes = [];
    this._noteid = 0;
  }

  List.prototype.returnNotes = function() {
    return this._notes;
  };

  List.prototype.newNote = function(text) {
    this._notes.push(new Note(text, this._noteid));
    this._noteid++;
  };

  exports.List = List;
})(this);
