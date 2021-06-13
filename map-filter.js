const number = [2, 3, 4, 5, 6];
// const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

//map....
// const output = number.map(function(element){
//     return element * element;
// });

// const result = element => element * element;
// const output = number.map(result);


const output = number.map(x => x * x);
console.log(output);


// filter

const result = number.filter(x => x > 4);
console.log(result);


// for each, reduce, find ,

//find......
const isThere = number.find(x => x > 4);
console.log(isThere);