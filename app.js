// app.js
const todoList = document.getElementById('todo-list');
const input = document.getElementById('todo-input');

// 加载本地存储
window.addEventListener('load', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => addTodoToList(todo));
});

function addTodo() {
  const value = input.value;
  if (value) {
    addTodoToList(value);
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
  }
}

function addTodoToList(text) {
  const li = document.createElement('li');
  li.textContent = text;
  todoList.appendChild(li);
}
