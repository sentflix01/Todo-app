const night = document.querySelector(".night");
const sunToggle = document.querySelector(".sun-toggle");
const todoSearch = document.querySelector(".todoSearch");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.querySelector(".todo-list");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearCompletedBtn = document.querySelector(".clear-completed");
const filterBtn = document.querySelector(".filter");
const itemsLeft = document.querySelector(".items-left");

// Theme toggle
sunToggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
});

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";
const saveItem = () => localStorage.setItem("todos", JSON.stringify(allTodos));

todoSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todoObject = {
      text: todoText,
      completed: false,
    };
    allTodos.push(todoObject);
    saveItem();
    renderTodos();
    todoInput.value = "";
  }
}

function createTodoItem(todo, index) {
  const todoLi = document.createElement("li");
  const todoId = "todo-" + index;
  todoLi.className = "list";
  todoLi.draggable = true;

  todoLi.innerHTML = `
    <input type="checkbox" id="${todoId}" ${todo.completed ? "checked" : ""} />
    <label for="${todoId}" class="list-item-checkbox ${
    todo.completed ? "checked" : ""
  }"></label>
    <label for="${todoId}" class="list-item-text ${
    todo.completed ? "completed" : ""
  }">${todo.text}</label>
    <div class="list-item-delete-icon">❌</div>`;
  return todoLi;
}

// Filter todos (all, active, completed)
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTodos();
  });
});

function renderTodos() {
  todoListUL.innerHTML = "";

  const filteredTodos = allTodos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });
  filteredTodos.forEach((todo, index) => {
    const todoItem = createTodoItem(todo, index);
    todoListUL.appendChild(todoItem);
  });
  if (filteredTodos.length > 5) {
    todoListUL.classList.add("scrollable");
  } else {
    todoListUL.classList.remove("scrollable");
  }
  updateItemsLeft();
}

// Check and delete todo
todoListUL.addEventListener("click", (e) => {
  const index = Array.from(todoListUL.children).indexOf(e.target.parentElement);
  if (e.target.classList.contains("list-item-delete-icon")) {
    allTodos.splice(index, 1);
  } else if (e.target.classList.contains("list-item-checkbox")) {
    allTodos[index].completed = !allTodos[index].completed;
  }
  saveItem();
  renderTodos();
});

// Clear completed
clearCompletedBtn.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.completed);
  saveItem();
  renderTodos();
});

// Update Items Left
function updateItemsLeft() {
  const activeCount = allTodos.filter((todo) => !todo.completed).length;
  itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

// Drag order functionality
todoListUL.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData(
    "text",
    Array.from(todoListUL.children).indexOf(e.target)
  );
});

todoListUL.addEventListener("dragover", (e) => {
  e.preventDefault();
});

todoListUL.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedIndex = e.dataTransfer.getData("text");
  const targetIndex = Array.from(todoListUL.children).indexOf(e.target);

  if (draggedIndex !== targetIndex) {
    const [movedTodo] = allTodos.splice(draggedIndex, 1);
    allTodos.splice(targetIndex, 0, movedTodo);
    saveItem();
    renderTodos();
  }
});

renderTodos();
