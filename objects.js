var todosList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addToDo: function(todo) {
        this.todos.push(todo);
        this.displayToDos();
    },
    changeToDo: function(position, newValue) {
        this.todo[position] = newValue;
        this.displayTodos();
    },
    deleteToDo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};