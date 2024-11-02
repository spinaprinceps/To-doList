let ctr = 1;

function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}

function toggleTodoStatus(index) {
    const element = document.getElementById(index);
    const spanEl = element.querySelector("span");
    spanEl.classList.toggle("completed"); // Toggle line-through style
}

function addTodo() {
    let value = document.querySelector("input").value;
    if (!value.trim()) return; 

   
    const divEl = document.createElement("div");
    const checkboxEl = document.createElement("input");
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");

    
    checkboxEl.type = "checkbox";
    checkboxEl.setAttribute("onclick", "toggleTodoStatus(" + ctr + ")");
    checkboxEl.classList.add("todo-checkbox");

    
    spanEl.innerHTML = value;
    spanEl.classList.add("todo-text");

   
    buttonEl.innerHTML = "✕"; 
    buttonEl.setAttribute("onclick", "deleteTodo(" + ctr + ")");
    buttonEl.classList.add("delete-button");

    
    divEl.classList.add("todo-item");
    divEl.setAttribute("id", ctr);

    
    divEl.appendChild(checkboxEl);
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);

    
    const parentEl = document.getElementById("ele");
    parentEl.appendChild(divEl);

    
    document.querySelector("input").value = "";
    ctr++;
}
