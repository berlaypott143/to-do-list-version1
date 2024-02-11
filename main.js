//THE SELECTORS 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//FUNCTIONS 
function addTodo(event) {
    //PREVENT FORM FOR SUBMITTING
    event.preventDefault(); 
    console.log('hellow');

    //Todo DIV 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //CREATE LI 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECKMARK BUTTON 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //DELETE BUTTON 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //APPEND TO LIST 
    todoList.appendChild(todoDiv);

    //CLEAR TODO INPUT VALUE 
    todoInput.value = "";
}


//EVENTS
todoButton.addEventListener('click', addTodo);