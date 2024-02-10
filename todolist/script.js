function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'task';

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        const completeButton = document.createElement('button');
        completeButton.className = 'complete-btn';
        completeButton.textContent = '✓';
        completeButton.onclick = function () {
            completeTask(newTaskDiv);
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = '✗';
        deleteButton.onclick = function () {
            deleteTask(newTaskDiv);
        };

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(deleteButton);

        newTaskDiv.appendChild(taskText);
        newTaskDiv.appendChild(taskButtons);

        taskList.appendChild(newTaskDiv);
        taskInput.value = '';
    }
}

function deleteTask(taskDiv) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskDiv);
}

function completeTask(taskDiv) {
    const taskText = taskDiv.querySelector('span');
    taskText.classList.toggle('completed');

    const completeButton = taskDiv.querySelector('.complete-btn');
    completeButton.style.display = 'none';
}
