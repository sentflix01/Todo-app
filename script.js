

const img = document.querySelector('.img')
const sun = document.querySelector('.sun');
const todoSearch = document.querySelector('.todoSearch');
const addTask = document.querySelector('.add-task');
const todoInput = document.querySelector('.TodoInput');
const todoList = document.querySelector('.todo-list');
const followupButtons = document.querySelector('.followupButtons');
const itemLeft = document.querySelector('.items-left');
const filter = document.querySelector('.filter');
const clearCompleted = document.querySelector('.clear-completed');

// Load saved todos from local storage
function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
      todos = JSON.parse(savedTodos);
  }
}

getLocalStorage() {
  const data = JSON.parse(localStorage.getItem('todo-list'));
}
// Save todos to local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
setLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
};
// Add new todo
todoSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();

  if (text) {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    todos.push(todo);
    saveTodos();
    renderTodos();
    todoInput.value = "";
  }
});



