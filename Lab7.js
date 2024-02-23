const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (newTaskInput.value === '') return;

	const newTask = document.createElement('li');
	newTask.className = 'task-item';
	newTask.innerHTML = `<span class="task-text">${newTaskInput.value}</span>
						<button class="complete-task-btn">Complete</button>
						<button class="delete-task-btn">Delete</button>`;

	taskList.appendChild(newTask);
	newTaskInput.value = '';

	const completeTaskBtn = newTask.querySelector('.complete-task-btn');
	completeTaskBtn.addEventListener('click', () => {
		newTask.querySelector('.task-text').classList.toggle('complete-task');
		completeTaskBtn.textContent = completeTaskBtn.textContent === 'Complete' ? 'Incomplete' : 'Complete';
	});

	const deleteTaskBtn = newTask.querySelector('.delete-task-btn');
	deleteTaskBtn.addEventListener('click', () => {
		taskList.removeChild(newTask);
	});
});