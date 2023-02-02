"use strict";

const arr = [1, 2, 3, 6, 8];

// arr[99]=0;
// console.log(arr);
// console.log(arr.length);

// // arr.pop();
// // arr.push(10);

// // console.log(arr);

// for (let value of arr){
//     console.log(value);
// };


// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt("","");
const products = str.split(",");
products.sort();
console.log(products.join(';'));