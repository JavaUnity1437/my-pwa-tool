function addTodo() {
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
  input.value = '';
}

// 注册Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered!', reg))
    .catch(err => console.log('SW failed:', err));
}
