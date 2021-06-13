const students = [
    {id:21, name: 'Maya'},
    {id:24, name: 'Nitu'},
    {id:25, name: 'Abbasi'},
    {id:22, name: 'Anju'}
];
//using for loop
// const output = [];
// for(let i = 0; i < students.length; i++){
//     const name = students[i].name;
//     output.push(name);
// }
// console.log(output);

//using map
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
console.log(names);
console.log(ids);


//using filter

const bigger = students.filter(s => s.id > 22);
console.log(bigger);
const biggerNames = bigger.map(s => s.name);
console.log(biggerNames);
const biggerImmediate = students.find(s => s.id > 22);
console.log(biggerImmediate);
