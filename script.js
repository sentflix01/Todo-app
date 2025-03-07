const night = document.querySelector(".night");
const sunToggle = document.querySelector(".sun-toggle");
const todoSearch = document.querySelector(".todoSearch");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.querySelector(".todo-list");
const filterButtons = document.querySelector(".filter-buttons");

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

function renderTodos() {
  todoListUL.innerHTML = "";

  const filteredTodos = allTodos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });
  filteredTodos.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    todoListUL.appendChild(todoItem); 
  });
  if (filteredTodos.length > 7) {
    todoListUL.classList.add("scrollable");
  } else {
    todoListUL.classList.remove("scrollable");
  }
}
todoListUL.addEventListener("click", (e) => {
  const index = Array.from(todoListUL.children).indexOf(
    e.target.parentElement);
  if (e.target.classList.contains("list-item-delete-icon")) {
    allTodos.splice(index, 1);
  } else if (e.target.classList.contains("list-item-checkbox")) {
    allTodos[index].completed = !allTodos[index].completed;
  }
  saveItem();
  renderTodos();
});

// function renderTodos() {
//   todoListUL.innerHTML = "";

//   const filteredTodos = all.filter((todo) => {
//     if (currentFilter === "active") return !todo.completed;
//     if (currentFilter === "completed") return todo.completed;
//     return true;
//   });
// };
// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     filterButtons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//     currentFilter = button.dataset.filter;
//     renderTodos();
//   });
// });

renderTodos();
