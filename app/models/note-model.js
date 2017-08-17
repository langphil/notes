/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function Note(text, noteid) {
    this._text = text;
    this._noteid = noteid;
  }

  Note.prototype.textReturn = function() {
    return this._text;
  };

  Note.prototype.returnId = function() {
    return this._noteid;
  };

  exports.Note = Note;
})(this);
