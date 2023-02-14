"use strict";

console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(5+''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("Hello", "");

//To Boolean

let switcher = null;

if(switcher){
    console.log("Working...");
}

console.log(typeof(!!"444"));