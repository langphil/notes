/*jshint esversion: 6 */

window.onload = function() {
  // const title = document.getElementById('title');
  // title.textContent = "Goat Notes";
  const list = new List();
  const controller = new Controller(list);
  controller.outputHTML();
};
