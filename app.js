
function check_todo(e) {
    if (e.target.nodeName == 'INPUT') {
        let todo_item_container = e.target.parentNode.childNodes[1];

        if (e.target.checked) {
            todo_item_container.style.textDecoration = 'line-through';
        } else {
            todo_item_container.style.textDecoration = 'none';
        }
    }
}

function create_todo(e) {
    e.preventDefault();
    let ele = document.getElementById("todos-container");
    let todo_node = document.createElement("li");
    let todo_item_content = get_input();
    todoList.push(todo_item_content);
    localStorage.setItem('todos', JSON.stringify(todoList));

    todo_node.classList.add("todo-item-container");
    todo_node.innerHTML = `<input class="todo-item-check" type="checkbox" /><div class="todo-item"><p class="todo-item-content">${todo_item_content}</p></div><i class="fas fa-trash todo-item-remove"></i>`
    ele.appendChild(todo_node);
}

function update_todo() {
    for (i in todoList) {
        let todo_item_content = todoList[i];
        let ele = document.getElementById("todos-container");
        let todo_node = document.createElement("li");

        todo_node.classList.add("todo-item-container");
        todo_node.innerHTML = `<input class="todo-item-check" type="checkbox" /><div class="todo-item"><p class="todo-item-content">${todo_item_content}</p></div><i class="fas fa-trash todo-item-remove"></i>`
        ele.appendChild(todo_node);
    }

}

function get_input() {
    let content = document.getElementById("add-todo-content");
    let result = content.value;
    content.value = '';
    return result;
}

function remove_todo(e) {
    if (e.target.className == 'fas fa-trash todo-item-remove') {
        let todo_item_container = e.target.parentNode;
        let todo_item_poped = todo_item_container.childNodes[1].childNodes[0].innerText;
        let todoList = JSON.parse(localStorage.getItem('todos'));
        todoList.splice(todoList.indexOf(todo_item_poped), 1);

        localStorage.setItem('todos', JSON.stringify(todoList));
        todo_item_container.remove();
    }
}

let todoList = [];
let checkToDos = document.getElementById('todos-container');
let toDos = document.getElementById("todos-container");
let addToDos = document.getElementById('add-todo-check');

checkToDos.addEventListener("change", check_todo);
toDos.addEventListener("click", remove_todo);
addToDos.addEventListener("click", create_todo);

window.onload = function () {
    if (typeof (localStorage.getItem("todos")) == 'undefined') {
        pass;
    } else {
        todoList = JSON.parse(localStorage.getItem('todos'));
        update_todo();
    }
}
