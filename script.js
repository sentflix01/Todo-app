

// const img = document.querySelector('img')
// const sun = document.querySelector('sun');
const todoSearch = document.querySelector('todoSearch');
const addTask = document.getElementById('add-task');
const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('todo-list');
// const followupButtons = document.querySelector('followupButtons');
// const itemLeft = document.querySelector('items-left');
// const filter = document.querySelector('.filter');
// const clearCompleted = document.querySelector('clear-completed');

let allTodos = [];

addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
})

function addTodo() {
  const todoText = todoInput.value.trim();
  alert(todoText);
}