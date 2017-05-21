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
    for (var index = 0; index < this.todos.length; index = index + 1) {
        if (this.todos[index].name === Todo.name) {
            legal_todo = false;
        }
    };
    if (legal_todo === true) {
        this.todos.push(Todo);
    }
    else {
        console.log("Todo already exists!");
        alert("" + Todo.name + " already exists!");
    }
};

TodoManager.prototype.length = function () {
    return this.todos.length;
};

var todo_manager = new TodoManager();

var add_todo = function add_todo (todo_name) {
    var new_todo = new Todo(todo_name);
    todo_manager.add_todo(new_todo);
    update_view();
};

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
                <td>Complete</td> \
                <td><button>Delete</button></td> \
            </tr> \
        ";       
    };

    var new_list = header + todo_items + footer;
    console.log(new_list);
    todo_list.innerHTML = new_list;
};
