const Modal = document.querySelector(".modal");
const clsbtn =document.querySelector("#close");
const loginbtn = document.querySelector('#login');

loginbtn.addEventListener('click',()=>{
    Modal.style.display="flex";
})

clsbtn.addEventListener('click',()=>{
    Modal.style.display="none";
})