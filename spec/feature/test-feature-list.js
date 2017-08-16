list = new List();        // List {_notes: Array(0)}
view = new View(list);    // View {_list: List}
controller = new Controller(list);   //Html {_view: View}

list.newNote('Eat plastic');
list.newNote('Annoy people');

controller.outputHTML();
