const nums = [11, 222, 23, 4, 15, 6, 70, 53, 100];
const part = nums.slice(1, 7); // create another array for sliced portion but original array is protected
console.log(part);
console.log(nums);
// const removed = nums.splice(1, 7); // remove elements from original array
const removed = nums.splice(1, 7, 33, 50); // inject elements to the original array from where
// elements are being removed (from the third parameter of the splice() )
console.log(removed);
console.log(nums);

const together = nums.join(""); //joining array elements 
const together2 = nums.join(" ");
const together3 = nums.join("something");
console.log(together);
console.log(together2);
console.log(together3);
