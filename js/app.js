// these are the models
var Todo = function (name) {
    this.name = name
};

Todo.prototype.get_name = function () {
    return this.name
};

var TodoManager = function () {
    this.todos = [];
};

TodoManager.prototype.add_todo = function (Todo) {
    var legal_todo = true;

    for (var index = 0; index < this.length(); index = index + 1) {
        if (this.todos[index].name === Todo.name) {
            legal_todo = false;
        }
    };
    if (legal_todo === true) {
        this.todos.push(Todo);
    }
    else {
        console.log("Cannot add, already exists!");
        alert("" + Todo.name + " already exists, cannot add!");
    }
};

TodoManager.prototype.length = function () {
    return this.todos.length;
};

TodoManager.prototype.delete_todo = function(TodoName) {
    var legal_todo = false;
    var position_to_delete = -1;

    for (var index = 0; index < this.length(); index = index + 1) {
        if (this.todos[index].name === TodoName) {
            legal_todo = true;
            position_to_delete = index;
        }
    };

    if (legal_todo === true) {
        this.todos.splice(position_to_delete, 1);
    }
    else {
        console.log("Todo does not exist, cannot delete!");
        alert("" + TodoName + " does not exist, cannot delete!");
    }
}


// these are the controllers
var todo_manager = new TodoManager();

var add_todo = function add_todo (todo_name) {
    var new_todo = new Todo(todo_name);
    todo_manager.add_todo(new_todo);
    update_view();
};

var delete_todo = function delete_todo (todo_name) {
    todo_manager.delete_todo(todo_name);
    update_view();
};

// this is the view
var update_view = function () {
    var todo_list = document.getElementById("todo_list");
    todo_list.innerHTML = "";

    var header = "\
    <table style=\"width:50%\"> \
        <tr> \
        <th>To Do</th> \
        <th></th> \
        <th></th> \
        </tr> \
    ";

    var footer = " \
        </table> \
    ";
    
    var todo_items = "";

    for (var index = 0; index < todo_manager.length(); index = index + 1) {
        todo_items = todo_items + " \
            <tr>\
                <td>" + todo_manager.todos[index].name + "</td> \
                <td><button>Complete</button></td> \
                <td><button onclick=\"delete_todo('" + todo_manager.todos[index].name + "');\">Delete</button></td> \
            </tr> \
        ";       
    };

    var new_list = header + todo_items + footer;
    console.log(new_list);
    todo_list.innerHTML = new_list;
};
