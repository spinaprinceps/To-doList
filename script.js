let ctr = 1;

function deleteTodo(index) {
    const element = document.getElementById(index);
    if (element) {  // Check if the element exists
        element.parentNode.removeChild(element);
    } else {
        console.error("Element not found for deletion:", index);
    }
}

function toggleTodoStatus(index) {
    const element = document.getElementById(index);
    if (element) {  // Check if the element exists
        const spanEl = element.querySelector("span");
        if (spanEl) {
            spanEl.classList.toggle("completed"); // Toggle line-through style
        }
    } else {
        console.error("Element not found for toggling status:", index);
    }
}

function addTodo() {
    let value = document.getElementById("todoInput").value;  // Use the ID to get the input value
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

    document.getElementById("todoInput").value = "";  // Clear the input after adding
    ctr++;
}
