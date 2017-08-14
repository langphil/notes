list = new List();

list.newNote('Go grocery shopping tonight');
list.newNote('Organise a running trip');
list.returnNotes();

view = new View(list);
view.print();
