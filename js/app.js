var Todo = function (name) {
    this.name = name
};

Todo.prototype.get_name = function () {
    return this.name
};

var todo_manager = [];

var add_todo = function add_todo (todo_name) {
    var new_todo = new Todo(todo_name);
    todo_manager.push(new_todo);
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

    for (var index = 0; index < todo_manager.length; index = index + 1) {
        todo_items = todo_items + " \
            <tr>\
                <td>"+todo_manager[index].name+"</td> \
                <td>Complete</td> \
                <td>Delete</td> \
            </tr> \
        ";       
    };

    var new_list = header + todo_items + footer;
    console.log(new_list);
    todo_list.innerHTML = new_list;
};
