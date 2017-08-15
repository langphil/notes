(function(exports) {
  function Html(view) {
    this._view = view;
  }

  Html.prototype.outputHTML = function() {
    document.getElementById("notes").innerHTML = view.printHtml();
  };

  exports.Html = Html;
})(this);
