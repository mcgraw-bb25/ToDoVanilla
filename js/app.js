var Todo = function (name) {
    this.name = name
};

Todo.prototype.get_name = function () {
    return this.name
};

var todo_manager = [];

var add_todo = function add_todo (todo_name) {
    var new_todo = new Todo(todo_name);
    todo_list.push(new_todo);
    update_view();
};

var update_view = function () {
    var todo_list = document.getElementById("todo_list");
    var header = "\
    <table style=\"width:50%\"> \
        <th>To Do</th> \
        <th></th> \
        <th></th> \
    ";
    var footer = " \
        </table> \
    ";
    
    var todo_items = "";
    for (var index = 0; index < todo_list.length; index = index + 1) {
        todo_items = todo_items + " \
            <tr>\
                <td>"+todo_manager[index].name+"</td> \
                <td>Complete</td> \
                <td>Delete</td> \
            </tr> \
        ";       
    };
    todo_list.innerHTML = header + todo_items + footer;
};
