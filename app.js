const addTodoForm = document.querySelector("#addTodoForm");

const addTodoInput = document.querySelector("#addTodoInputField");

const todoList = document.querySelector("#todoList");

// Set focus on text input
addTodoInput.focus();

// Add event listener for submitting form
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoInput.value);
});

// Function for adding list item
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">delete</button></li>`
  );
  addTodoForm.reset();
  addTodoInput.focus();
}

// Function for deleting list item
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
