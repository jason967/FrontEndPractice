const form = document.querySelector(".js-form"),
input =form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN ="showing";


function saveName(text)
{
    localStorage.setItem(USER_LS,text);
}
function askForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text)
{
    
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    //console.log("paintGreeting");
}
function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null)
    {
        //None
        console.log("HELL");
        askForName();
    }
    else
    {
        //Here
        console.log("Please");
        paintGreeting(currentUser);
    }
}
function init()
{
    console.log("init");
    loadName();
}

init();