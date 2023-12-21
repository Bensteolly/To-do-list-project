//selectors//
const toDoInput = document.querySelector('.todoInput');
const toDoBtn = document.querySelector('.addbtn');
const toDoList = document.querySelector('.toDoList');
const deletebtn = document.querySelector('.removebtn')


//functions//

function generateRandomColor() {
    // Generate random RGB values
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    
    // Create the RGB color string
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    
   return randomColor;
  }


const addToDo = (event ) =>{
    //created  a todo div//
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //created todo li//
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("toDo-item");
    todoDiv.appendChild(newToDo)

    const randomColor = generateRandomColor();
    newToDo.style.backgroundColor = randomColor;


    // created todo checked box//
    const checkedbox = document.createElement('input')
    checkedbox.type = 'checkbox';
    checkedbox.classList.add("check-box");
    todoDiv.appendChild(checkedbox);

     //created todo remove btn//
     const removeBtn = document.createElement('button');
     removeBtn.innerHTML ='<i class="fa-solid fa-trash-can"></i>';
     removeBtn.classList.add("removeBtn");
     todoDiv.appendChild(removeBtn);

    // appended todo div//
    const toDoList = document.getElementById('todoList')
    toDoList.appendChild(todoDiv);

    //to clear todoinput  and reset to input//
    toDoInput.value = " "
}
 function removeTask(e){
    const itemremoved = e.target;
    if (itemremoved.classList[0] === "removeBtn"){
        const todo = itemremoved.parentElement;
        todo.remove();
    }
 }

function checkboxTask(e){
    const itemchecked = e.target;
    if (itemchecked.classList[0] === "check-box"){
        todo.checkbox.checked = true;
    }
}

function saveToLocalStorage(todo){
    //checking local storage//

    let todos;
    if (localStorage.getItem(todos)=== null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem(todos));
    }

    todo. push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
 
  //event listner//
   toDoBtn.addEventListener("click",()=>{
    addToDo();

   });
   toDoList.addEventListener("click", removeTask);