var todos = ["item 1", "item 2", "item 3", "item 4b"];

function displayToDos() {
    console.log('My Todos:', todos);
}

function addToDo(todo) {
    todos.push(todo);
    displayToDos()
}

function changeToDo (position, newValue) {
    todos[position] = newValue;
    displayToDos();
}

function deletetoDo(position) {
    todos.splice(position, 1);
    displayToDos();
}