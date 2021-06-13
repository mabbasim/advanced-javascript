//can set a value null as the variable/anything is empty, aage chilo ekhon nai

//........for undefined.........
// without defining 
let name;
console.log(name);

//calling function without return or not write what to return
function add(num1, num2){
    console.log(num1 + num2); // forget to return
}
const result = add(12,13);
console.log(result);

function add2(num1, num2){
    console.log(num1 + num2);
    return      // not write what to return
}
const result2 = add2(12,13);
console.log(result);


// forget to pass argument while calling function  
function getNum(num1, num2){
    console.log(num1,num2);     
}
const number = getNum(12);
console.log(number);

//object er property declare na korle 
const person = {name: 'Maya', age: 22}
console.log(person.phone);

//if variable value is set undefined
let fun = undefined;
console.log(fun);

//get an element of an array which is not existed
let ages = [5, 2, 6, 3];
console.log(ages[9]);