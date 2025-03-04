// const img = document.querySelector('img')
// const sun = document.querySelector('sun');
const todoSearch = document.querySelector(".todoSearch");
// const addTask = document.getElementById('add-task');
const todoInput = document.getElementById("todo-input");
// const todoForm = document.querySelector('form');
const todoList = document.querySelector(".todo-list"); // Fixed selector
// const followupButtons = document.querySelector('followupButtons');
// const itemLeft = document.querySelector('items-left');
// const filter = document.querySelector('.filter');
// const clearCompleted = document.querySelector('clear-completed');

let allTodos = [];

todoSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    // Fixed condition
    allTodos.push(todoText);
    updateTodoList(); // Call updateTodoList to refresh the list
    todoInput.value = ""; // Clear input after adding
  }
}

function createTodoItem(todo, index) {
  const todoLi = document.createElement("LIst"); // Fixed element type
  const todoId = "todo-" + index;
  todoLi.className = "list";

  todoLi.innerHTML = `
      <input type="checkbox" id="${todoId}" />
   <label for="${todoId}" class="list-item-checkbox"></label>
   <label for="${todoId}" class="list-item-text">${todo} </label>
  <div class="list-item-delete-icon">❌</div>`;
  return todoLi;
}

function updateTodoList() {
  todoList.innerHTML = "";
  allTodos.forEach((todo, index) => {
    const todoItem = createTodoItem(todo, index);
    todoList.appendChild(todoItem);
  });
}
