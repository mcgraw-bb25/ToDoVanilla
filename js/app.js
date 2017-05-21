var Todo = function (name) {
    this.name = name
};

Todo.prototype.get_name = function () {
    return this.name
};

var todo_list = [];

var add_todo = function add_todo (todo_name) {
    var new_todo = new Todo(todo_name);
    todo_list.push(new_todo);
    update_view();
};

var update_view = function () {
    var todo_list = document.getElementById("todo_list");
    todo_list.innerHTML = "";
};
