// Models
// Todo
var Todo = function (name) {
    this.name = name;
    this.completed = false;
};

Todo.prototype.get_name = function () {
    return this.name;
};

Todo.prototype.get_status = function () {
    return this.completed;
};

Todo.prototype.complete = function (name) {
    this.completed = true;
};


// TodoManager
var TodoManager = function () {
    this.todos = [];
    this.completed = [];
};

TodoManager.prototype.todo_length = function () {
    return this.todos.length;
};

TodoManager.prototype.completed_length = function () {
    return this.completed.length;
};

TodoManager.prototype.add_todo = function (Todo) {
    var legal_todo = true;

    for (var index = 0; index < this.todo_length(); index = index + 1) {
        if (this.todos[index].get_name() === Todo.get_name()) {
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

TodoManager.prototype.delete_todo = function(TodoName) {
    var legal_todo = false;
    var position_to_delete = -1;

    for (var index = 0; index < this.todo_length(); index = index + 1) {
        if (this.todos[index].get_name() === TodoName) {
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
};


TodoManager.prototype.complete_todo = function(TodoName) {

    var legal_todo = false;
    var position_to_complete = -1;

    for (var index = 0; index < this.todo_length(); index = index + 1) {
        if (this.todos[index].get_name() === TodoName) {
            legal_todo = true;
            position_to_complete = index;
        };
    };

    if (legal_todo === true) {
        this.todos[position_to_complete].complete();
    }
    else {
        console.log("Todo does not exist, cannot complete!");
        alert("" + TodoName + " does not exist, cannot complete!");
    }
};



// Controllers
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

var complete_todo = function complete_todo (todo_name) {
    todo_manager.complete_todo(todo_name);
    update_view();
};


// View
var update_view = function () {
    var todo_list = document.getElementById("todo_list");
    var todo_items = "";
    var completed_items = "";
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


    for (var index = 0; index < todo_manager.todo_length(); index = index + 1) {
        if (!todo_manager.todos[index].get_status()) {
            todo_items = todo_items + " \
                <tr>\
                    <td>" + todo_manager.todos[index].get_name() + "</td> \
                    <td><button onclick=\"complete_todo('" + todo_manager.todos[index].get_name() + "');\">Complete</button></td> \
                    <td><button onclick=\"delete_todo('" + todo_manager.todos[index].get_name() + "');\">Delete</button></td> \
                </tr> \
            ";
        }
        else {
            completed_items = completed_items + " \
                <tr bgcolor=\"#33cc33\">\
                    <td>" + todo_manager.todos[index].get_name() + "</td> \
                    <td>Complete</td> \
                    <td></td> \
                </tr> \
            ";
        }
    };

    var new_list = header + todo_items + completed_items + footer;
    console.log(new_list);
    todo_list.innerHTML = new_list;
};





// Loader
var loader = 0;


if (loader === 0) {
    var todo_form_div = document.createElement("div");
    todo_form_div.name ="todo_manager";
    todo_form_div.id = "todo_manager";

    var todo_adder = document.createElement("input");
    todo_adder.name = "todo_name";
    todo_adder.id = "todo_name";
    todo_adder.type = "text";

    var todo_adder_button = document.createElement("button");
    todo_adder_button.onclick = function() {
        var todo_to_add = document.getElementById("todo_name").value;
        add_todo(todo_to_add);
        };
    todo_adder_button.innerHTML = "Add To Do";

    todo_form_div.appendChild(todo_adder);
    todo_form_div.appendChild(todo_adder_button);

    //var todo_container = document.getElementById("todo");
    //todo_container.appendChild(todo_form_div);
    document.body.appendChild(todo_form_div);

    var todo_list = document.createElement("div");
    todo_list.name ="todo_list";
    todo_list.id = "todo_list";

    //todo_container.appendChild(todo_list);
    document.body.appendChild(todo_list);

    loader = 1;
}
