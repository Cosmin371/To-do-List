const checkboxElement = document.querySelector('.js-checkbox');
const inputElement = document.querySelector('.js-input');
const tasksBlock = document.querySelector('.js-tasks');

const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

renderTasks();

function addTask() {
    taskList.push({
        name: inputElement.value,
        checked: false
    });
    localStorage.setItem('taskList', JSON.stringify(taskList));
    inputElement.value = '';
    renderTasks();
}

function renderTasks() {
    let html = '';
    for (let i = 0; i < taskList.length; i++)
        html += `
            <div>
                <input type="checkbox" ${taskList[i].checked ? 'checked' : ''}
                    onclick="
                        taskList[${i}].checked = !taskList[${i}].checked;
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                    "
                >
                ${taskList[i].name}
                <button onclick="
                    taskList.splice(${i} ,1);
                    localStorage.setItem('taskList', JSON.stringify(taskList));
                    renderTasks();
                ">Delete</button>
            </div>
        `;
    tasksBlock.innerHTML = html;
}
