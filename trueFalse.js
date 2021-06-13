
//......Falsy....
// 0
//""
//undefined
//null
//Nan
//false
//.....Truthy......
//'0',  " ", [],  {}

const name = '';
if(name.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const age = 10;
if(age > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

let schoolName;  //if undefined it will return false
console.log(schoolName);
if(schoolName){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const phone = null;
console.log(phone);
if(phone){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const something = NaN;
console.log(something);
if(something){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const something2 = false;
console.log(something2);
if(something2){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}