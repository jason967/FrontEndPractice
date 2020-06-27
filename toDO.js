const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDOList");

const TODO_LS = 'toDo';
let toDo = [];

function saveToDo(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDo));
}


function filterFn(ToDo)
{
    return ToDo.id===1;
}
function deleteToDo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDo.filter(function(TODO)
    { 
        return TODO.id !== parseInt( li.id);
    });
    toDo=cleanToDos; 
    saveToDo();
}

function paintToDo(text)
{
    const li = document.createElement("li");
    const deleteBtn =document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length+1;
    deleteBtn.innerText="X";
    deleteBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id:newId
    };
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event)
{
    event.preventDefault();
    const curValue = toDoInput.value;
    paintToDo(curValue);
    toDoInput.value = "";
}
function loadToDo()
{
    const loadedToDo = localStorage.getItem(TODO_LS);
    if(loadToDo!==null)
    {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo)
        {
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }

}

function init()
{
    loadToDo();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();