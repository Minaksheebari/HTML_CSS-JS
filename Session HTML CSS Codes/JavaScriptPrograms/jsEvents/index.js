// function changeColor() {
//     let btn = document.querySelector('button');
//     btn.style.color='red';
// }
let btn = document.querySelector('button');         // making it global
let parentDiv =document.querySelector('div');
let body =document.querySelector('body');


function changeColor() {
    btn.style.color='red';
}

//1st Method
// btn.addEventListener('click',changeColor);

//2nd Method
btn.addEventListener('click',()=>{
   // btn.style.color='red';
   console.log("Button being clicked!!");
})

parentDiv.addEventListener('click',()=>{
    console.log("Div being clicked!!");
})

body.addEventListener('click',()=>{
    console.log("Body being clicked!!");
})

//We are selecting all li tags: 
 const ul = document.querySelector('.lists');

ul.addEventListener('click',(event)=>{
    // ul.style.color='pink';
    console.log(event.target.tagName);
    if(event.target.tagName=="LI"){
        // ul.style.color='red';

        // event.target.style.color="red";

        //attaching css file
        event.target.classList.add("changeColor");
    }
});

let obj ={}
const input = document.querySelector("input");
input.addEventListener('change',(event)=>{
    console.log(event.target.name, event.target.value); 
    obj[event.target.name]=event.target.value
    // if(event.target.name=="username"){
    //     obj[event.target.name]=event.target.value
    // }
    // if(event.target.name=="email"){
    //     obj[event.target.name]=event.target.value
    // }
    
    console.log(obj,"our obj");
})

let email=document.querySelector('#email');
email.addEventListener('change',(event)=>{
    console.log(event.target.name, event.target.value); 
    obj[event.target.name]=event.target.value
})





















