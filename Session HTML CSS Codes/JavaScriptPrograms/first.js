// JS is a browsers language. It use v8 engine. V8 engine already knows javascript.

// print statement
console.log("Hi JS")

// JS is single threaded and schynchronous language
// schynchronous : line by line
// single threaded : one task at a time 


// declaring variable using - var, let, const
// JS remembers it's variables(NOT it's actual value) & functions
// Execution: memory allocation phase & execution phase

console.log(a) //Output: undefined 
// undefined is a special type of keyword in JS 
//which is provided as a placeholder when NO VALUE assigned to variable , NOT an error.

var a=10;       // var has a functional scope.
var a = 20;
console.log("Var A=",a); //print 20

let b=10;       // ES6 varient of JS     //let has block scope.
console.log("Let B=",b);
//You can not access let variable before initialization 
//because space before initialization line is known as Temporal Dead Zone(TDZ).

//TDZ is similarity between const & let

// let : it does NOT allow redeclaration but allow reinitialization. 
// redeclaration : let a=20; let a=30;   NOT ALLOW
// reinitialization : let a=20; z=30; ALLOW


const c=10;
console.log("Const C=",c);

// JS engine : GLobal Object : will consist some of the by default methods of javascript.

//memory allocation phase : hoisting and execution phase
//Hoisting means : moving all the variable and function to the top of their global scope.

const ar = [1,2,3,4,5];
ar[0]=12;   // no error in reinitialization
console.log(ar);
//ar=[1,2,3]; //Error in redeclaration

//FUNCTIONS IN JS: 

// Function in JD termed as first class citizens or first -class objects.
// Which means we can store functions in variable.
// OR function can be passed to another function
// OR passed as a argument OR can be returned from a function.

//There are four types of functions - 
// 1. Named functions
function fun(parameters) {
    //logic
}
fun();


// 2. Anonymous functions i.e. without name 
// here variable a is called Functional Expression: It is done by storing function in a variable.
let afun=function(parameters) {          //stored in a variable to allocate memory coz function have No name.
    //logic
}
afun();


// 3. Arrow functions : ES6 variant of JS
let bfun=(parameters)=>{
    //logic
}
bfun();


// 4. IIFE functions : Immediately innvoked functional expression
(
    (parameters)=>{
        //logic
        //Used in case of API interactions. 
        //Only executed one time.
        //Used in a global scope.
    }
)
() //brackets calling function 




