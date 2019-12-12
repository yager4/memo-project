'use strict'

function init(){
    loadData();
    renderTodos()
}


function renderTotals(){
    var elTotalSpan = document.querySelector('#total-todos');
    var elActiveSpan = document.querySelector('#active-todos');

    elTotalSpan.innerHTML = getTotalTodosCount();
    elActiveSpan.innerHTML = getActiveTodosCount();
}

function renderTodosList(){
    var elTodods = document.querySelector('.todos');
    var todos = getTodosToRender();
    var strLis = todos.map(function(todo){
        return `<li class="todo ${todo.isDone ? 'done' : ''}" onclick="onTodoClicked(${todo.id})">
                    ${todo.title} <span class="delete" onclick="onDeleteClick(${todo.id} , event)">🐽</span>
                </li>\n`;
    })
    console.log(strLis.join(''));
    elTodods.innerHTML = strLis.join('');
}

function renderTodos(){
    renderTodosList();
    renderTotals();
}

function  onDeleteClick(todoID , event){
    deleteTodo(todoID);
    renderTodos();
    event.stopPropagation();
}

function onTodoClicked(todoID){
    toggleDone(todoID);
    renderTodos();
}

function onAddClick(){
    var elTxtTodo = document.querySelector('#todo-title');
    var newTodoTitle =  elTxtTodo.value;

    addTodo(newTodoTitle);

    renderTodos();
}

function onStatusFilterChange(elStatusFilter){
    var filterByStatus = elStatusFilter.value;
    setFilterStatus(filterByStatus);
    renderTodos();
}