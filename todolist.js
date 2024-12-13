const addTaskButton = document.getElementById('add-task-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
function addTask() {
  const taskText = inputField.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }
  const taskItem = document.createElement('li');
  taskItem.className = 'todo-item';
  const taskContent = document.createElement('span');
  taskContent.setAttribute('data-task', taskText); 
  taskContent.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(taskItem);
    updateNumbers();
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  todoList.appendChild(taskItem);
  inputField.value = ''; 
  updateNumbers();
}
function updateNumbers() {
  const tasks = document.querySelectorAll('.todo-item');
  tasks.forEach((task, index) => {
    const taskContent = task.querySelector('span');
    const originalText = taskContent.getAttribute('data-task'); 
    taskContent.textContent = `${index + 1}. ${originalText}`;
  });
}
addTaskButton.addEventListener('click', addTask);
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
