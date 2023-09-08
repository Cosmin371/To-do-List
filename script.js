const checkboxElement = document.querySelector('.js-checkbox');
const inputElement = document.querySelector('.js-input');
const tasksBlock = document.querySelector('.js-tasks');
const timeElement = document.querySelector('.js-time-input');

const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

renderTasks();

function addTask() {
    if (inputElement.value) {
        taskList.push({
            name: inputElement.value,
            checked: false
        });

        localStorage.setItem('taskList', JSON.stringify(taskList));
        inputElement.value = '';
        renderTasks();
    }
}

function renderTasks() {
    let html = '';
    for (let i = 0; i < taskList.length; i++)
        if (taskList[i].checked)
            html += `
                
                <input type="checkbox" checked class="chechbox"
                    onclick="
                        taskList[${i}].checked = !taskList[${i}].checked;
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                        renderTasks();
                    "
                >
                <div class="task-name">
                    <del>${taskList[i].name}</del>
                </div>
                
                <button class="delete-button" onclick="
                    taskList.splice(${i} ,1);
                    localStorage.setItem('taskList', JSON.stringify(taskList));
                    renderTasks();
                ">Delete</button>
            `;
        else
            html += `
                <input type="checkbox" class="chechbox"
                    onclick="
                        taskList[${i}].checked = !taskList[${i}].checked;
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                        renderTasks();
                    "
                >
                <div class="task-name">
                    ${taskList[i].name}
                </div>
                
                <button class="delete-button" onclick="
                    taskList.splice(${i} ,1);
                    localStorage.setItem('taskList', JSON.stringify(taskList));
                    renderTasks();
                ">Delete</button>
            `
    tasksBlock.innerHTML = html;

}
