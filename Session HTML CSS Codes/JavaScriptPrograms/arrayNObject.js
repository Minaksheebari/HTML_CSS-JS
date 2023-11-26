const sampleArr=[1,2,3,4,5];
sampleArr.push(6);
console.log(sampleArr);

//Array functions - map, filter, reduce
 
//1. map()=> it returns array which is same size as that of original array.
// original array is not affected.

let mappedArray=sampleArr.map((currentValue,index,originalarray)=>{
    // console.log("Current Value: ", currentValue,index,originalarray);

    // const multiples = currentValue * 2;      //return multiple by 2

    if(currentValue%2==0){
        return currentValue;        //return even numbers 
    }
    //return multiples;
})

console.log("Mapped Array: ", mappedArray);
console.log("Original Array: ", sampleArr);


//2.filter()=> give only filtered result
let filterArr = sampleArr.filter((currentValue,index,originalarray)=>{
    //conditional statement
    if(currentValue%2==0){
        return currentValue;
    }
})
console.log("Filtered Array: ", filterArr);


//3.reduce()=> all the array elements reduced into single value
const reducevalue =sampleArr.reduce((accumulator,number)=>{
    // sum of all array elements
    const sum = accumulator + number;
    return sum;
},0)
console.log("Reduced value i.r SUM: ", reducevalue);

// JS OBJECTS: 

let obj ={
    name:"Minu",
    dob:"22-06-1996",
    dept:"MCA"
}

//object dot notation
obj.age=27;
obj.name="Minakshee"
console.log(obj);

//Adding spaces in keys
obj["My name is: "]="Minu";
console.log(obj["dob"]);

//Inbuilt methods to manipulate objects: keys(), values(),entries()

//1. keys()=> access all the keys inside object in the form of array
const allkeys=Object.keys(obj);
console.log(allkeys);

allkeys.map((currentKey)=>{
    console.log(obj[currentKey]);
})

//2. values()=> access all the values inside object in the form of array
//Dynamic access to values of object
const allValues =allkeys.map((currentKey)=>{
    console.log(obj[currentKey]);
    return obj[currentKey]
})
console.log("All values of object: ", allValues);

//dicrect access - tracking of key is not available
const alldirectvalues = Object.values(obj);
console.log("Object values accessed directly: ", allValues);

//3.entries=> access all the keys-value pair inside array in the form of array i.e. array within array
const objkeyvalue = Object.entries(obj);
console.log("All object entries: ", objkeyvalue);

objkeyvalue.map((currentValue,index,originalarray)=>{
    console.log(currentValue,index);
})

//Destructing ES6 (EcmaScript v6) version.
//map, filter, reduce: ES6
//Arrow functions, let, const : ES6

const arr = [1,2,3];
const [arr1,arr2,arr3]=[1,2,3];     //Destructing
console.log(arr1,arr2,arr3);

//Use of destructing
objkeyvalue.map(([key,value],index)=>{
    //console.log("Key: ",key," Value: ",value,index);
    const keyvaluepair ={
        [key]:value
    }
    return keyvaluepair;
})
