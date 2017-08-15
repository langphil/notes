let list = new List();
let view = new View(list);
let html = new HTML(view);

list.newNote('Go grocery shopping tonight');
list.newNote('Organise a running trip');

html.OutputHtml();
