/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

(function(exports) {
  function SingleNote(note) {
    this._note = note;
  }

  SingleNote.prototype.returnSingle = function() {
    return this._note._text;
  };

  SingleNote.prototype.outputSingle = function() {
    return "<ul><li>" + this.returnSingle() + "</li></ul>";
  };
  exports.SingleNote = SingleNote;
})(this);
