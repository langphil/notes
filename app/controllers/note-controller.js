/*jshint esversion: 6 */

window.onload = function() {
  list = new List();
  view = new View(list);
  list.newNote('The whole universe is one bright pearl, and there is no need to understand it.');
  list.newNote('The only way love ever affected death was in making it more painful.');
  list.newNote('To believe you know where you are headed is not to understand where one is at the moment.');
  list.newNote('Wanting something to be different will not make it so.');

  controller = new Controller(list);
  controller.outputHTML();
  // controller.makeUrlChangeNoteForCurrentPage();
};
