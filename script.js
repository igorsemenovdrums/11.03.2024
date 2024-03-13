
function taskCollect() {
const tasks = [];

while (true) {

    const task = prompt('Enter task:')
    if (task === null) break;
    tasks.push(task);
}
return tasks;
};

function addTask() {
    const newTask = prompt("new task:");
    for (let i = 0; i < 1; i++) {
        if (newTask === null) break;
        else {
    const item = document.createElement('li');
    const delButt = document.createElement('button');
    delButt.addEventListener("click", delCurrent);
    item.textContent = newTask;
    item.classList.add('liId');
    const getList = document.getElementById('ulTask');
    delButt.textContent = 'X';
    delButt.style.cursor = 'grab';
    delButt.style.color = 'red';
    delButt.classList.add('remove-butt');
    getList.append(item);
    item.append(delButt);

       };
    };
};

function removeLastTask() {
    for (let i = 0; i < 1; i++) {
    const listDel = document.getElementById('ulTask');
    const removinTask = listDel.lastElementChild;
        if (removinTask === null) break;
        else {
    removinTask.remove();
       };
    };
};

function delCurrent(event) {
    const target = event.target;
    target.parentElement.remove();
}



function renderButtons() {
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.style.cursor = 'pointer';
    addButton.addEventListener("click", addTask);
    document.body.prepend(addButton);
    
    const addButton2 = document.createElement('button')
    addButton2.textContent = '-';
    addButton2.style.cursor = 'pointer';
    addButton2.addEventListener("click", removeLastTask);
    document.body.prepend(addButton2);
};

function render(tasks) {
const ul = document.createElement('ul');
document.body.prepend(ul);
ul.id = 'ulTask'
const getUl = document.getElementById('ulTask');


for (let i = 0; i < tasks.length; i++) {
    
    const li = document.createElement('li');
    const delButt = document.createElement('button');
    delButt.addEventListener("click", delCurrent);
    delButt.textContent = 'X';
    delButt.classList.add('remove-butt');
    getUl.append(li);
    li.textContent = tasks[i];
    delButt.style.cursor = 'grab';
    delButt.style.color = 'red';
    li.classList.add('liId');
    li.append(delButt);

};
};

function init() {
    renderButtons();
    render(taskCollect());
}

init();


