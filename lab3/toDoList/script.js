const form = document.getElementById('todo-form');
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit",function(event){
event.preventDefault();
const taskText = input.value.trim();
if(taskText===''){
    return;
}
addTodoItem(taskText);
input.value='';
}
);
function addTodoItem(text){
    const listItem = document.createElement('li');
    listItem.className = "todoItem";

    const leftSection = document.createElement('div');
    leftSection.className = "todo-left";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "checkBox";

    const span = document.createElement('span');
    span.className = "todo-text";
    span.textContent = text;

    checkbox.addEventListener('change',function(){
        span.classList.toggle('done');
    }
    );

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" 
     width="18" 
     height="18" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     stroke-width="2">
  <polyline points="3 6 5 6 21 6"></polyline>
  <path d="M19 6l-1 14H6L5 6"></path>
  <path d="M10 11v6"></path>
  <path d="M14 11v6"></path>
  <path d="M9 6V4h6v2"></path>
</svg>
`;
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click',function(){
        todoList.removeChild(listItem);
    });
    leftSection.appendChild(checkbox);
    leftSection.appendChild(span);

    listItem.appendChild(leftSection);
    listItem.appendChild(deleteBtn);

    todoList.appendChild(listItem);
}