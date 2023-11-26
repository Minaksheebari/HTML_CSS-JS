//DOM: Document Object Model

//selecting HTML tags

//1.By tagname:
const divtags=document.getElementsByTagName("div");     //Output: HTML collection []
console.log(divtags);


//2. By IDname
const divid=document.getElementById('intro')
console.log(divid);


//2. By classesName
const divclass=document.getElementsByClassName('body');     //Output: HTML collection []
console.log(divclass);

const divId =document.querySelector('#intro');
console.log(divId);
console.log(divId.innerHTML);   //invoke actual value of intro to console

const divClasses =document.querySelector('.body');
console.log(divClasses);
console.log(divClasses.innerHTML); 
console.log(divClasses.childNodes);
console.log(divClasses.children);

const divdemo =document.querySelectorAll('div');
console.log(divdemo);           //give ouput as nodelist []


//innerHTML, innerText, Value

console.log(divClasses.innerHTML);  

console.log(divClasses.innerText);        

console.log(divClasses.value);  //output: Undefined // It will work on input tags only

const inputTag =document.querySelector(".input");
console.log(inputTag.value);