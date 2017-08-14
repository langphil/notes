(function Note() {

  var Note = function(text) {
    this.note_text = text;
  };

  Note.prototype.return = function() {
    return this.note_text;
  };
})();
