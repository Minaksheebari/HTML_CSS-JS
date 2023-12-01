//HTML FILE: fisrt.html

//DOM: Document Object Model

//selecting HTML tags

//1.By tagname - 
const divtags=document.getElementsByTagName("div");     //Output: HTML collection []
console.log(divtags);


//2. By IDname - Id's are given to unique element
const divid=document.getElementById('intro')        //output: get the element directly
console.log(divid);


//3. By classesName - used for multiple elements having same class
const bodyclass=document.getElementsByClassName('body');     
//Output: HTML collection [] - consist only html elements
console.log(bodyclass);

//4. By querySelector for id(#)- whenever we want to accsess single element
const divId =document.querySelector('#intro');
console.log(divId);
console.log(divId.innerHTML);   //invoke actual value of intro to console

//4. By querySelector for class(.)
const divClasses =document.querySelector('.body');
console.log(divClasses);
console.log(divClasses.innerHTML); 
console.log(divClasses.childNodes);
console.log(divClasses.children);

//5. By querySelectorAll - whenever we want to accsess multiple elements
const divdemo =document.querySelectorAll('div');
console.log(divdemo);           
//give ouput as nodelist[]- Nodelist consist of everything like html elements, tags, spaces


//innerHTML, innerText, Value

console.log(divClasses.innerHTML);  

console.log(divClasses.innerText);        

console.log(divClasses.value);  //output: Undefined // It will work on input tags only

// const inputTag =document.querySelector(".input");
// console.log(inputTag.value);

const introTag = document.querySelector('p');
introTag.style.color='red';

let mydiv =document.querySelector(".sample")
// let innerdivValue="Javascript Demo";
let innerdivValue=0;
let newBtn = document.createElement('button');
newBtn.textContent="Increament Count";


mydiv.addEventListener('click',function(){
    //Different Scenarios

    // alert("Your div has been clicked")
    // mydiv.style.color="red"
    mydiv.style.height="100px"
    mydiv.style.width="100px"
    // mydiv.innerText="Hero vired"

    mydiv.innerHTML = `<div id="redbox" style="background-color: rgb(241, 22, 59); height:70px; width:70px; font-weight:"bold";>
    ${innerdivValue}
    </div>
    
    <button id="btn">Increament</button>
    `
    // backtick sign is used in above code to inser value in ${}
    const btn =document.getElementById('btn');
    console.log(btn);
    btn.addEventListener('click',function(){
        alert("Button clicked");
        //update counter logic
    })
    //button should be outside the blue box

    //we are going to attach the global btn we created, inside the body.
    document.body.appendChild(newBtn);
    newBtn.addEventListener('click',function(){
        const redboxDiv=document.querySelector('#redbox');
        console.log(redboxDiv.innerText);
        redboxDiv.innerText=parseInt(redboxDiv.innerText)+1;
    })
})

//MouseOver event : Hover effect
//mouseenter
//mouseout

let hoverMe=document.querySelector('.hoverMe');
// hoverMe.addEventListener('mouseover',function(){
//     hoverMe.style.backgroundColor="lightpink"
// })

hoverMe.addEventListener('mouseenter',function(){
    hoverMe.style.backgroundColor="lightpink"
    hoverMe.classList.add('hoverDiv')
    //box shadow 

})

hoverMe.addEventListener('mouseout',function(){
    hoverMe.style.backgroundColor="blue"
    hoverMe.classList.remove('hoverDiv')
})

//Scroll Event
let scroller = document.querySelector('.scroll');
scroller.addEventListener('scroll',function(){
    console.log("I am scolling");
})

//Change event: for dropdown list
const vehicle = document.getElementById('vehicle');
vehicle.addEventListener('change',function(event){
    console.log(event.target.name, " : " , event.target.value)
})

const input=document.querySelector('input')
input.addEventListener('change',function(event){
    console.log(event.target.name," : ", event.target.value);
})

//Pick your subject : make a checkbox : give 4 subjects
//pick your gender : make radio button : male & female

