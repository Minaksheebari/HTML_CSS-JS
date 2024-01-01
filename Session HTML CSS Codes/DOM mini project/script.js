
const button = document.querySelector('button');

button.addEventListener('click',addTask);


function addTask(){
    const inputBox = document.getElementById('taskInput');
    const taskUL = document.getElementById('taskList');

    console.log(inputBox.value,"this is input value");

    if(inputBox.value !==""){
        const li = document.createElement('li');
        // li.innerText=inputBox.value;


        li.innerHTML=`
        <span>${inputBox.value}</span>
            <button onclick=deleteTask(this)>Delete</button>
            <input type='checkbox' onchange=completeTask(this)>
        `
        taskUL.appendChild(li);
        inputBox.value=''
    }
}

function deleteTask(button){
    const li= button.parentElement;
    console.log(li);
    li.remove();
}

function completeTask(input){
    // console.log(input,"this is what this keyword is pointing");
    const span = input.parentElement.querySelector('span');
    console.log(span,"Span tag value");

    if(input.checked){
        span.style.textDecoration="line-through";
    }
    else{
        span.style.textDecoration="none";
    }
}